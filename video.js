const showClickedVideo =() => {
    let data = localStorage.getItem('clicked_video');

    data = JSON.parse(data);

// Embeding a vidoe using iframe HTML element 

let iframe = document.createElement('iframe');

iframe.src = `https://www.youtube.com/embed/${data.videoId}`;

iframe.width = '100%';
iframe.height = '100%';

iframe.setAttribute('allowfullscreen', true);
let video_div = document.getElementById('video_details');
video_div.append(iframe);
};

export { showClickedVideo };