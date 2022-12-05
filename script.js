
let butoon =  document.querySelector(".hanburder");
let close = document.querySelector(".close");
let content = document.querySelector(".links");


butoon.onclick= function(){
    content.classList.toggle("show");
}
close.onclick= function(){
    content.classList.toggle("show");
}

