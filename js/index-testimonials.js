(function () {

  document.querySelectorAll('.testimonials-carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel__item');
    items.forEach((item, i) => {
      item.style.transform = `translateX(${i * 100}%)`;
    });
    const buttonsHtml = Array.from(items, () => {
      return `<button class="feedbacks-wrapper__slider-round"></button>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
      <div class="feedbacks-wrapper__slider-round-block">
        ${buttonsHtml.join(" ")}
      </div>
    `);

    const buttons = carousel.querySelectorAll(".feedbacks-wrapper__slider-round");

    function changeSlide(slideIdx) {
      items.forEach(item => item.classList.remove("carousel__item-selected"));
      buttons.forEach(button => button.classList.remove("carousel__button-selected"));
      items.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - slideIdx)}%)`;
      });

      items[slideIdx].classList.add("carousel__item-selected");
      buttons[slideIdx].classList.add("carousel__button-selected");
    };

    function getCurrenSlideIdx() {
      const currentSlideIdx = Array.from(items).findIndex((item) => {
        return item.classList.contains('carousel__item-selected');
      });
      return currentSlideIdx;
    }

    function nextSlide() {
      const currentSlideIdx = getCurrenSlideIdx();
      const nextSlideIdx = currentSlideIdx + 1 >= items.length ? items.length - 1 : currentSlideIdx + 1;

      changeSlide(nextSlideIdx);
    }

    function prevSlide() {
      const currentSlideIdx = getCurrenSlideIdx();
      const prevSlideIdx = currentSlideIdx - 1 < 0 ? 0 : currentSlideIdx - 1;

      changeSlide(prevSlideIdx);
    }

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        changeSlide(i);
      });
    });

    items[0].classList.add("carousel__item-selected");
    buttons[0].classList.add("carousel__button-selected");

    carousel.querySelector(".feedbacks__back-btn").addEventListener("click", prevSlide);
    carousel.querySelector(".feedbacks__forward-btn").addEventListener("click", nextSlide);

  });
})();
