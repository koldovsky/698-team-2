function nextSlide(num) {
  const thumb = 'img/brewery-gallery/gallery2-photo' + num + '.png';
  document.querySelector('.brewery-gallery__img--main').src = thumb;
}

const thumbsContainer = document.querySelector(".brewery-gallery__images--thumbs");
const thumbs = thumbsContainer.querySelector(".brewery-gallery__img");
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


const thumbSlideOne = document.querySelector('.slide1');
thumbSlideOne.addEventListener('click', nextSlide(1), reset());

const thumbSlideTwo = document.querySelector('.slide2');
thumbSlideTwo.addEventListener('click', nextSlide(2), reset());

const thumbSlideThree = document.querySelector('.slide3');
thumbSlideThree.addEventListener('click', nextSlide(3), reset());

const thumbSlideFour = document.querySelector('.slide4');
thumbSlideFour.addEventListener('click', nextSlide(4), reset());

const thumbSlideFive = document.querySelector('.slide5');
thumbSlideFive.addEventListener('click', nextSlide(5), reset());

const thumbSlideSix = document.querySelector('.slide6');
thumbSlideSix.addEventListener('click', nextSlide(6), reset());
