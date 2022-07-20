(function () {
  const slides = [
    `<div><img src="img/individual-tour.png" alt="Individual Tour"</div>

    <div class="events__gallery__title">INDIDIDUAL TOUR</div>
     <div class="events__gallery__discription">
      We offer exciting tours for groups of up to 10 people. You
     will learn more about the brewing process firsthand.
     <div class="events__gallery_button">
      <a href="">Learn more</a></div>`,

    `<div><img src="img/group-tour.png" alt="Group Tour"</div>
    <div class="events__gallery__title">GROUP TOUR</div>
    <div class="events__gallery__discription">
    We offer exciting tours for groups of up to 10 people. You
     will learn more about the brewing process firsthand.
      </div>
      <div class="events__gallery_button">
     <a href="">Learn more</a>
      </div>`,

    `<div><img src="img/tasting.png" alt="Tasting"</div>
    <div class="events__gallery__title">TASTING</div>
    <div class="events__gallery__discription__tasting">
    You can sign up for a delicious tasting of the most popular
    beer types with snacks included in the price.
    </div>
    <div class="events__gallery_button">
    <a href="">Learn more</a></div> `,

    `<div><img src="img/brewery-masterclass.png" alt="Brewery Masterclass"</div><div class="events__gallery__title">BREWERY MASTERCLASS</div>
    <div class="events__gallery__discription">
        Do you want to feel like a real brewer? We will teach you how
        to make your own beer. You'll become an expert!
        <div class="events__gallery_button">
            <a href="">Learn more</a></div>`,
  ]

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".main-ivents__carousel , .slide-container");
    slideContainer.innerHTML = slides[slideIdx];
    if (window.innerWidth > 600) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 900) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
  }

  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide()
  }

  const nextButton = document.querySelector('.main-ivents-carousel__container > button.btn-next')
  nextButton.addEventListener('click', nextSlide);

  const prevButton = document.querySelector('.main-ivents-carousel__container > button.btn-prev')
  prevButton.addEventListener('click', prevSlide);

  showCurrentSlide();
  window.addEventListener('resize', showCurrentSlide);
  showCurrentSlide()
})()