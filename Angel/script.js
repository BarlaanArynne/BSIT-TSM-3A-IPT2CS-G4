function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const image1 = document.getElementById("hozier");

image1.addEventListener('click', () => {
  document.getElementById('worksong').play();
})

const image2 = document.getElementById("kiyo");

image2.addEventListener('click', () => {
  document.getElementById('ikawlang').play();
})

const image3 = document.getElementById("frank");

image3.addEventListener('click', () => {
  document.getElementById('godspeed').play();
})