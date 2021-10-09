const baseURL = "https://petterbakke.one/project%20exam/?rest_route=%2Fwp%2Fv2%2Fmedia&fbclid=IwAR3CvM7-qGKHpGCSc_jMzA9l5ljwjw7i8Osi6pFiKX_O8WYLACb6UQj-30M"
let imgNo = 0;

async function getImg(url) {
  const response = await fetch(url);
  const img_list = await response.json();
  console.log(img_list);


  const errordiv = document.querySelector(".errors");
  let mainDiv = document.querySelector(".home")
  let carousel = document.querySelector(".carousel")

  let image
  for(let i = 6; i < 10; i++){
    image = img_list[i].guid.rendered;
    let fig = `<img src="${image}" imgno="${i}" \>`; 
    carousel.innerHTML += fig;
  }
  carousel.innerHTML += "<a class='leftbtn' onclick='leftBtn()'>&#10094;</a>";
  carousel.innerHTML += "<a class='rightbtn' onclick='rightBtn()'>&#10095;</a>";
  
 

  changeSlide(imgNo);
  
  
}

getImg(baseURL);


function changeSlide(imgnumber){
  let imgs= document.querySelectorAll("img");
  for (let i=0; i<imgs.length; i++){
    imgs[i].style.display= "none"
  }
  imgs[imgnumber].style.display = "block";
}
function leftBtn(){
  let imgs= document.querySelectorAll("img");
  if (imgNo === 0){
    imgNo = imgs.length-1;
  }else{
    imgNo -= 1;
  }
  changeSlide(imgNo);
}
function rightBtn(){
  let imgs= document.querySelectorAll("img");
  if (imgNo === imgs.length-1){
    imgNo = 0;
  }else{
    imgNo += 1;
  }
  changeSlide(imgNo);
}