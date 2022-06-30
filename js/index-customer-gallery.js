(function() {
  const slides = [
    ` <div class="customers-gallery__img">
    <img
      src="img/customers-gallery/customers-gallery-photo1.png"
      alt="Glass of beer"
      class="customers-gallery-photo1"
    />
  </div>`,
  `<div class="customers-gallery__img">
  <img
    src="img/customers-gallery/customers-gallery-photo2.png"
    alt="A few people have fun by drinking beer"
    class="customers-gallery-photo2"
  />
</div>`,
`<div class="customers-gallery__img">
<img
  src="img/customers-gallery/customers-gallery-photo3.png"
  alt="Two glasses of beer"
  class="customers-gallery-photo3"
/>
</div>`,
`<div class="customers-gallery__img">
<img
  src="img/customers-gallery/customers-gallery-photo4.png"
  alt="A guy who drinks a glass of beer"
  class="customers-gallery-photo4"
/>
</div>`,
` <div class="customers-gallery__img">
<img
  src="img/customers-gallery/customers-gallery-photo5.png"
  alt="Two girls drink beer"
  class="customers-gallery-photo5"
/>
</div>`
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector('.customers-gallery .customers-gallery__images');
    slideContainer.innerHTML = slides[slideIdx];
    const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
    slideContainer.innerHTML += slides[thirdSlideIdx];
    const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
    slideContainer.innerHTML += slides[fourthSlideIdx];
    const fivethSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
    slideContainer.innerHTML += slides[fivethSlideIdx];
  }

function nextSlide() {
  slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
  showCurrentSlide();
}

function prevSlide() {
  slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
  showCurrentSlide();
}

//setInterval(nextSlide, 3000);
showCurrentSlide();

const nextButton = document.querySelector('.customers-gallery > .customers-gallery__btn-next');
nextButton.addEventListener('click', nextSlide);
const prevButton = document.querySelector('.customers-gallery > .customers-gallery__btn-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);

})()