document.addEventListener("DOMContentLoaded", function () {

  const hero = document.querySelector(".hero");

  // 🔥 Digital Marketing slideshow images
  const images = [
    "./images/digital1.jpg",
    "./images/digital2.jpg",
    "./images/digital3.jpg"
  ];

  let index = 0;

  // First image
  hero.style.backgroundImage = `url("${images[index]}")`;
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";

  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url("${images[index]}")`;
  }, 4000); // 4 seconds
});
