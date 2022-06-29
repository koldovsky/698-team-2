(function() {

document.querySelectorAll('.carousel').forEach(carousel => {
  const items = carousel.querySelectorAll('.carousel__item');
  const buttonsHtml = Array.from(items, () => {
    return `<button class="feedbacks-wrapper__slider-round"></button>`;
  });

  carousel.insertAdjacentHTML("beforeend", `
    <div class="feedbacks-wrapper__slider-round-block">
      ${ buttonsHtml.join(" ") }
    </div>
  `);

  const buttons = carousel.querySelectorAll(".feedbacks-wrapper__slider-round");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach(item => item.classList.remove("carousel__item-selected"));
      buttons.forEach(button => button.classList.remove("carousel__button-selected"));

      items[i].classList.add("carousel__item-selected");
      button.classList.add("carousel__button-selected");
    });
  });

  items[0].classList.add("carousel__item-selected");
  buttons[0].classList.add("carousel__button-selected");
});

})();