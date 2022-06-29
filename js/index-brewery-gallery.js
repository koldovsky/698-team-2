function nextSlide(num) {
  const thumb = 'img/brewery-gallery/gallery2-photo' + num + '.png';
  document.querySelector('.brewery-gallery__img--main').src = thumb;
}

// const thumbSlideOne = document.querySelector('.slide1');
// thumbSlideOne.addEventListener('click', nextSlide(1));

// const thumbSlideTwo = document.querySelector('.slide2');
// thumbSlideTwo.addEventListener('click', nextSlide(2));

// const thumbSlideThree = document.querySelector('.slide3');
// thumbSlideThree.addEventListener('click', nextSlide(3));

// const thumbSlideFour = document.querySelector('.slide4');
// thumbSlideFour.addEventListener('click', nextSlide(4));

// const thumbSlideFive = document.querySelector('.slide5');
// thumbSlideFive.addEventListener('click', nextSlide(5));

// const thumbSlideSix = document.querySelector('.slide6');
// thumbSlideSix.addEventListener('click', nextSlide(6));