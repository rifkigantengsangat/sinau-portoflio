const Hello = [
  "selamat datang",
  "wilujeng Sumping",
  "Welcome",
  "أَهْلًا وَسَهْلًا",
  "Irasshaimase",
  "환영합니다",
  'Shalom',
  ' Hoşgeldiniz',
  'Willkommen'

];
const text = document.querySelector(".text");
const profile = document.querySelector("#Profile");
const contact = document.querySelector("#Contact");
const section = document.querySelector(".section");
const footer = document.querySelector("#footer");
const test = document.querySelector(".test");
let  i = -1;
const timer = () => {
  section.style.display = "none";
  profile.style.display = "none";
  contact.style.display = "none";
  footer.style.display = "none";
  if (i < Hello.length) {
    i = i+1
    text.innerHTML = `<span>${Hello[i]}</span> `;
  }
  setTimeout(timer, 350);
  if(i == Hello.length) {
    section.style.display= "block";
    profile.style.display= "block";
    contact.style.display= "block";
    footer.style.display= "flex";
    test.style.display = "none";
     
  }  

};
window.addEventListener("DOMContentLoaded", timer, true);
console.log("window")