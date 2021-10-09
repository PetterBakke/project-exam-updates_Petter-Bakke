const params = new URLSearchParams(window.location.search);
const postid = params.get("id");

let postURL = `https://petterbakke.one/project%20exam/?rest_route=/wp/v2/posts/${postid}`;

async function getPost(url) {
  const response = await fetch(url);
  const post = await response.json();

  console.log(post);

  let titleDiv = document.querySelector(".title");
  let contentDiv = document.querySelector(".content");

  let title = post.title.rendered;
  let content = post.content.rendered;

  titleDiv.innerHTML = title;
  contentDiv.innerHTML = content;
}

getPost(postURL);