(function () {
  const bestsellers = [
    {
      id: "stout",
      className: "stout",
      beerImage: "img/our-bestsellers-stout.png",
      beerImagealt: "Picture of Imperial Stout Beer",
      name: "Our Bestsellers",
      seedsImage: "img/seeds-decor.svg",
      subtitle: "WHEAT MALT",
      title: "IMPERIAL STOUT",
      description: `A hallmark of this beer is that it is made from 8 different
 varieties of malt and 3 varieties of hops.<br />
 Thanks to this, it is possible to achieve an amazing, unique
 taste of strong beer. The highlight of our imperial stout is a
 light chocolate flavor.`,
      infoTitle1: "EXTRACT",
      infoText1: "18,00%",
      infoTitle2: "ALCOHOL",
      infoText2: "9%",
      infoTitle3: "IBU",
      infoText3: "28",
      infoTitle4: "SERVING TEMPERATURE",
      infoText4: "5-7 °C",
    },
    {
      id: "ipa",
      className: "ipa",
      beerImage: "img/our-bestsellers-ipa.png",
      beerImagealt: "Picture of Indian Pale Ale",
      name: "Our Bestsellers",
      seedsImage: "img/seeds-decor.svg",
      subtitle: "MALT",
      title: "INDIAN PALE ALE",
      description: `The main feature of this beer is that historically it was made
  very strong, the strength reached 12%.<br />
  However, with the development of brewing, we began to move away
  from the excessive strength, stopping at a reasonable value -
  5.5-6%.`,
      infoTitle1: "EXTRACT",
      infoText1: "16,00%",
      infoTitle2: "ALCOHOL",
      infoText2: "5,7%",
      infoTitle3: "IBU",
      infoText3: "39",
      infoTitle4: "SERVING TEMPERATURE",
      infoText4: "10 °C",
    },
    {
      id: "apa",
      className: "apa",
      beerImage: "img/our-bestsellers-ара.png",
      name: "Our Bestsellers",
      seedsImage: "img/seeds-decor.svg",
      subtitle: "FRUITY",
      title: "AMERICAN PALE AL",
      description: `American pale ale is similar to Indian pale ale, but in this
   case, only American-made hops and malt are used. At the same
   time, APA is characterized by a stunning combination of citrus
   notes: grapefruit, lemon, orange, as well as hop bitterness,
   traditional for ale.`,
      infoTitle1: "EXTRACT",
      infoText1: "16,00%",
      infoTitle2: "ALCOHOL",
      infoText2: "5,8%",
      infoTitle3: "IBU",
      infoText3: "43",
      infoTitle4: "SERVING TEMPERATURE",
      infoText4: "10 °C",
    },
  ];

  function renderBestsellers(bestsellers) {
    const bestsellersContainer = document.querySelector(".bestsellers");
    bestsellersContainer.innerHTML = "";
    for (const bestseller of bestsellers) {
      bestsellersContainer.innerHTML += `
    <article class="bestseller">
    <div class="bestseller__beer-img">
      <img
        src="${bestseller.beerImage}"
        alt="${bestseller.beerImagealt}"
        class="${bestseller.className}"
      />
    </div>
    <div class="bestseller__content">
      <span class="bestseller__decor-x xxx-decor-light">☓ ☓ ☓</span>
      <h2 class="bestseller__general-title block-title-light">
        ${bestseller.name}
      </h2>
      <div class="bestseller__decor-seeds seeds-decor">
        <img
          src="${bestseller.seedsImage}"
          alt="Decor"
          class="seeds-decor"
        />
      </div>
      <h4 class="bestseller__subtitle">${bestseller.subtitle}</h4>
      <h3 class="bestseller__title">${bestseller.title}</h3>
      <p class="bestseller__text">
        ${bestseller.description}
      </p>
      <div class="bestseller__info bestseller-info">
        <div class="bestseller-info__item">
          <h6 class="bestseller-info__title">${bestseller.infoTitle1}</h6>
          <p class="bestseller-info__text">${bestseller.infoText1}</p>
        </div>
        <div class="bestseller-info__item bestseller-info__item-row">
          <h6 class="bestseller-info__title">${bestseller.infoTitle2}</h6>
          <p class="bestseller-info__text">${bestseller.infoText2}</p>
        </div>
        <div class="bestseller-info__item">
          <h6 class="bestseller-info__title">${bestseller.infoTitle3}</h6>
          <p class="bestseller-info__text">${bestseller.infoText3}</p>
        </div>
        <div class="bestseller-info__item">
          <h6 class="bestseller-info__title">${bestseller.infoTitle4}</h6>
          <p class="bestseller-info__text">${bestseller.infoText4}</p>
        </div>
      </div>
    </div>
  </article>
    `;
    }
  }

  renderBestsellers(bestsellers);
})();
