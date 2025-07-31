
// import {navbar} from './components/navbar.js';

//  let navbar_div = document.getElementById('navbar');

//  navbar_div.innerHTML = navbar();


//  //  Code for dark mode toggle 
 
//    // Attach event listener AFTER injecting the button
// const toggleBtn = document.getElementById('toggle-dark');
// if (toggleBtn) {
//     toggleBtn.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         const isDark = document.body.classList.contains('dark-mode');
//         localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     });

//     // Restore theme on load
//     if (localStorage.getItem('theme') === 'dark') {
//         document.body.classList.add('dark-mode');
//     }
// }

//  //adding event handlers via JS

//  let search_btn = document.getElementById("search");
// search_btn.onclick = () => {
//     searchVideos();
// };

// const searchVideos = async () =>{

//     try{
//         const API_KEY = 'AIzaSyA6AMhkgc1CQKRVmgChmNmube8kzYfBca0';

//         let search_term = document.getElementById("search_term").value;

//         let response =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${API_KEY}`);

//         let data =await response.json();
        
//         let actual_data = data.items;

//         appendVideos(actual_data);

        
//     }catch(err){
//         console.log('err:', err);
//     }
//     };

//     const container = document.getElementById('container');

//     const appendVideos = (data) => {

//         container.innerHTML = null;

//         data.forEach(({snippet, id: {videoId}}) =>{

//             let div = document.createElement('div');

//             let p_title =document.createElement('p');
//             p_title.innerText = snippet.title;

//             let p_channel_name = document.createElement('p');
//             p_channel_name.innerText = snippet.channelTitle;

//             let thumbnail = document.createElement('img');
//             thumbnail.src = snippet.thumbnails.high.url;

//             div.append(thumbnail, p_title, p_channel_name);


//             div.onclick = () => {

//                 let data ={
//                     snippet : snippet,
//                     videoId : videoId

//                 };

//                 data = JSON.stringify(data);
//                 localStorage.setItem('clicked_video', data)
//                 window.location.href ='video.html'
//              }

             
//             container.append(div);

//         });
//     };



// // document.addEventListener('DOMContentLoaded', () => {
// //     const searchButton = document.getElementById('search');
// //     searchButton.addEventListener('click', searchVideos);
// // });
    


















// // document.getElementById("location").addEventListener("click", function(){
//     // locationVideos();

// // });

//     // const locationVideos = async () =>{

//     //    

//     //     try{
//     //         const API_KEY = 'AIzaSyA6AMhkgc1CQKRVmgChmNmube8kzYfBca0';
    
//     //         let location_term = document.getElementById("location_term").value;
    
//     //         let response =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${location_term}&key=${API_KEY}`);
    
//     //         let data =await response.json();
            
//     //         let actual_data = data.items;
    
//     //         appendVideos(actual_data);
    
            
//     //     }catch(err){
//     //         console.log('err:', err);
//     //     }
//     //     }




import { navbar } from './components/navbar.js';

// Render navbar
const navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

// Wait for navbar to be in DOM
document.addEventListener('DOMContentLoaded', () => {
  // Wait slightly to ensure navbar is inserted
  setTimeout(() => {
    const toggleBtn = document.getElementById('toggle-dark');

    if (toggleBtn) {
      // Load theme
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.classList.add('dark-active');
      }

      // Add toggle listener
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleBtn.classList.toggle('dark-active');

        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }
  }, 50); // short delay to ensure navbar loads
});

// --- Search functionality ---
let search_btn = document.getElementById("search");
search_btn.onclick = () => {
  searchVideos();
};

const searchVideos = async () => {
  try {
    const API_KEY = 'AIzaSyA6AMhkgc1CQKRVmgChmNmube8kzYfBca0';
    let search_term = document.getElementById("search_term").value;

    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${API_KEY}`);
    let data = await response.json();
    appendVideos(data.items);

  } catch (err) {
    console.log('err:', err);
  }
};

const container = document.getElementById('container');

const appendVideos = (data) => {
  container.innerHTML = null;

  data.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement('div');

    let title = document.createElement('p');
    title.innerText = snippet.title;

    let channel = document.createElement('p');
    channel.innerText = snippet.channelTitle;

    let thumbnail = document.createElement('img');
    thumbnail.src = snippet.thumbnails.high.url;

    div.append(thumbnail, title, channel);

    div.onclick = () => {
      localStorage.setItem('clicked_video', JSON.stringify({ snippet, videoId }));
      window.location.href = 'video.html';
    };

    container.append(div);
  });
};
