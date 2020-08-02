const key = <YOUR_API_KEY>;
const playlistId = 'PLywiNEAPE4I9mIv_edkzGeyJkeJmB9b8J';

fetch(
    `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&part=snippet&maxResults=10`  
)

    .then((res) => res.json())        
    .then((data) => {
        results(data);
    })
    .catch((err) => {
        console.log(err);
    });

const results = data => {
    data.items.forEach((item) => {
        console.log(item);
        
        const thumbnail = item.snippet.thumbnails.medium.url;
        const title = item.snippet.title;
        const desc = item.snippet.description.substring(0, 100);
        const vid = item.snippet.resourceId.videoId;

        document.getElementById('app').innerHTML += `
        <a href='https://www.youtube.com/watch?v=${vid}' target='_blank'>
            <img src='${thumbnail}' alt='thumbnail' class='thumb' />
            <h4>${title}</h4>
            <p>${desc}</p>
        </a>
        `;
    });
};

