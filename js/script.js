const containerIntro = document.querySelector(".container-intro");
const imgContainer = document.querySelector(".img-container");
const imgSrc = document.querySelector(".img-src");
const imgDesc = document.querySelector(".img-desc");
const identitas = document.querySelector(".identitas");
const narative = document.querySelector(".narative");
const buttonIntro = document.querySelector(".button-intro");
const sapa = document.querySelector(".sapa");
const subSapa = document.querySelector(".sub-sapa");
const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".mobile-navbar");
const halaman = document.querySelector('.halaman');
const containerPort = document.querySelectorAll('.portfolio-container');
let currentSide = 0;
document.onkeydown = keyPress;

function activeIntro() {
  containerIntro.classList.replace("container-intro", "container-intro-active");
  imgDesc.classList.replace("img-desc", "img-desc-active");
  imgContainer.classList.replace("img-container", "img-container-active");
  imgSrc.classList.replace("img-src", "img-src-active");
  identitas.classList.replace("identitas", "identitas-active");
  narative.classList.replace("narative", "narative-active");
  buttonIntro.classList.replace("button-intro", "button-intro-active");
  sapa.classList.replace("sapa", "sapa-active");
  subSapa.classList.replace("sub-sapa", "sub-sapa-active");
}

function deactiveIntro() {
  containerIntro.classList.replace("container-intro-active", "container-intro");
  imgDesc.classList.replace("img-desc-active", "img-desc");
  imgContainer.classList.replace("img-container-active", "img-container");
  imgSrc.classList.replace("img-src-active", "img-src");
  identitas.classList.replace("identitas-active", "identitas");
  narative.classList.replace("narative-active", "narative");
  buttonIntro.classList.replace("button-intro-active", "button-intro");
  sapa.classList.replace("sapa-active", "sapa");
  subSapa.classList.replace("sub-sapa-active", "sub-sapa");
}

function nextSide(){
  for(const cp of containerPort){
    if(currentSide == containerPort.length){
      alert('Ini halaman terakhir');
      return;
    }else{
    cp.classList.toggle('port-disactive');
    currentSide++;}
  }
}

function prevSide(){
  for(const cp of containerPort){
    if(currentSide == 0){
      alert('Ini halaman pertama');
      return;
    }else{
    cp.classList.toggle('port-disactive');
    currentSide--;}
  }
}

const portfolioDisactive = Array.from(document.getElementsByClassName("portfolio"));
const portToActive = Array.from(document.querySelectorAll('.portfolio figure'));
const closePort = Array.from(document.getElementsByClassName("tutup"));

portToActive.forEach(e => {
  e.addEventListener("click", function(){
    e.parentElement.classList.replace('portfolio', 'portfolio-active');
})
})

closePort.forEach((b) => {
    b.addEventListener('click', function() {
        portfolioDisactive.forEach(a=> a.classList.replace('portfolio-active', 'portfolio'));
    })
})

//keyPress
function keyPress(e) {
  if (e.keyCode == "27") {
    deactiveIntro();
  }
}

// Navbar hilang saat discroll
let hilangNavbar = window.pageYOffset;
window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  if (hilangNavbar > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100%";
  }
  hilangNavbar = currentScroll;
};

//Navbar bawah hilang saat layar didiamkan selama 3 detik
document.onmouseup = function () {
  setTimeout(function () {
    mobileNavbar.style.bottom = "-100%";
    navbar.style.top = "-100%";
  }, 5000);
};
document.onclick = function () {
  mobileNavbar.style.bottom = "0";
  navbar.style.top = "0";
};
