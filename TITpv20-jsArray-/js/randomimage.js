const mainImage = document.querySelector("#img")
const button = document.querySelector(".btn")

const images = ["img/TF1.png", "img/TF2.png","img/TF3.png","img/TF4.png"];
button.addEventListener('click', ()=>{
 console.log("hello from script fille!");
 let rnd = Math.floor(Math.random() * images.length);
 mainImage.src = images [rnd];
 console.log("Random number:", rnd);
});