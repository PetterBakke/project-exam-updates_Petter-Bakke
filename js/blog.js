const postURL = "https://petterbakke.one/project%20exam/?rest_route=/wp/v2/posts&per_page=15";
const mediaURL = "https://petterbakke.one/project%20exam/?rest_route=/wp/v2/media&per_page=15";

var posts;
var media;

async function getPostsTitle(url) {
  const response = await fetch(url);
  posts = await response.json();

  let maindiv = document.querySelector(".blog")

  let title
  for(let i = 0; i < 10; i++ ){
    
    title = posts[i].title.rendered;
    let postId = posts[i].id;

    let newdiv = `
    <div class="postcard">
      <div class="posttitle">${title}</div>
      <img src="" data-id="${postId}" onclick="redirect(this)"/>
    </div>
    `
    maindiv.innerHTML += newdiv
  }
  getPostImage(mediaURL);
}

async function getPostImage(url) {
  const response = await fetch(url);
  media = await response.json();
  
  let allthecards = document.querySelectorAll(".postcard img");
  for(let i = 0; i < 10; i++){
    
    let image = media[i].guid.rendered;
    let altText = media[i].caption.alt_text;
    allthecards[i].src = image;
  }
}
getPostsTitle(postURL);




function redirect(event){
  console.log(event.dataset.id);
  let postid = event.dataset.id;

  window.location.href = `specific.html?id=${postid}`;
}


let viewMoreBtn = document.querySelector("#view");

viewMoreBtn.addEventListener("click", loadMore);

function loadMore(){

  let maindiv = document.querySelector(".blog");
  let title;
  let postId;
  let image;
  for(let i = 10; i < posts.length; i++ ){
    
    title = posts[i].title.rendered;
    postId = posts[i].id;
    image = media[i].guid.rendered;

    let newdiv = `
    <div class="postcard">
      <div class="posttitle">${title}</div>
      <img src="${image}" data-id="${postId}" onclick="redirect(this)"/>
    </div>
    `
    maindiv.innerHTML += newdiv;
  }

  viewMoreBtn.style.display = "none";
}

