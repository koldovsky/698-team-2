(function () {
  const slides = [
    `
    <img src="img/brewery-gallery/gallery2-photo1.png"
        alt="Two bearded men in a brewery with bottles on the foreground"
        class="brewery-gallery__img--main">
    `,
    `
    <img src="img/brewery-gallery/gallery2-photo2.png" alt="Beer barrels in a brewery"
        class="brewery-gallery__img--main">
    `,
    `
    <img src="img/brewery-gallery/gallery2-photo3.png" alt="beer bottles production line"
        class="brewery-gallery__img--main">
    `,
    `
    <img src="img/brewery-gallery/gallery2-photo4.png" alt="A bearded man holding a beer barrel"
        class="brewery-gallery__img--main">
    `,
    `
    <img src="img/brewery-gallery/gallery2-photo5.png" alt="Two men working in a brewery"
        class="brewery-gallery__img--main">
    `,
    `
    <img src="img/brewery-gallery/gallery2-photo6.png"
        alt="Close-up of brown beer bottles on a production line"
        class="brewery-gallery__img--main">
    `,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      ".brewery-gallery__images--main"
    );
    slideContainer.innerHTML = slides[slideIdx];
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
    // slideContainer.style.transition = "left 2s";
  }

  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide();
    // slideContainer.style.transition = "right 2s";
  }

  showCurrentSlide();

  const nextButton = document.querySelector(
    ".brewery-gallery__slider_button-right"
  );
  nextButton.addEventListener("click", nextSlide);

  const prevButton = document.querySelector(
    ".brewery-gallery__slider_button-left"
  );
  prevButton.addEventListener("click", prevSlide);

  const thumbnails = document.querySelectorAll(".brewery-gallery__img");
  for (const thumbnail of thumbnails) {
    thumbnail.addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      thumbnail.classList.add("active");
    });
  }

  function showSlide(slideNum) {
    slideIdx = slideNum;
    showCurrentSlide();
  }

  const thumbs = document.querySelectorAll(".thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", () => showSlide(i));
  }
})();
