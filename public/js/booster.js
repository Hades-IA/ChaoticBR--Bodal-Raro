document.querySelector("#box").addEventListener("click", function () {
  document.querySelector("#box").title = "true";
});

document.querySelector("#individual").addEventListener("click", function () {
  document.querySelector("#box").title = "false";
});

document.querySelector("#add").addEventListener("click", function () {
  let value = Number(document.querySelector("#qtn").value);
  document.querySelector("#qtn").value = value + 1;
});

document.querySelector("#remove").addEventListener("click", function () {
  let value = Number(document.querySelector("#qtn").value);
  document.querySelector("#qtn").value = value - 1;
});

document.querySelector("#collection").addEventListener("input", function () {
  let value = document.querySelector(".set-title").innerText.toLowerCase();

  document.querySelector(".set-title").innerText =
    document.querySelector("#collection").value;
  value = document.querySelector(".set-title").innerText.toLowerCase();
  let imgurl = boostersImg.filter((data) => data.title === value)[0];
  document.querySelector("#banner-img").src = imgurl.url;
});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var boostersImg = [
  { title: "dawn of perim", url: "https://i.imgur.com/yKdfDqL.jpg" },
  { title: "zenith of the hive", url: "https://i.imgur.com/MEevi7M.jpg" },
  { title: "silent sands", url: "https://i.imgur.com/DB2A4iS.jpg" },
  { title: "beyond the doors", url: "https://i.imgur.com/0b6lQPQ.jpg" },
  { title: "rise of the oligarch", url: "https://i.imgur.com/Gek4EkM.jpg" },
  { title: "forged unity", url: "https://i.imgur.com/Xt5hsAb.jpg" },
  { title: "turn of the tide", url: "https://i.imgur.com/BgRsbEK.jpg" },
  { title: "alliance unraveled", url: "https://i.imgur.com/w2oKiAX.jpg" },
];

class Arithmetic {
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  chance(chance, penality = 0) {
    let randomNumber = this.getRandomIntInclusive(0, 100);

    if (randomNumber <= chance - penality) return true;

    return false;
  }
}

const rate = new Arithmetic();

const cards = cardsJson;

const cardsPromo = cards.filter((card) => {
  let rarety = card.cardtype.filter((cardtype) => cardtype.title === "promo");

  return rarety.length > 0;
});
//listern
document.getElementById("starter").addEventListener("click", Start);
document.querySelectorAll(".download").forEach((btn) => {
  btn.addEventListener("click", downloadstart);
});
//function
function downloadstart() {
  let filename = "lista_de_cartas";
  let openBoosters = document.querySelector(".openBoosters").innerText;
  download(filename, openBoosters);
}
function download(filename, text) {
  var element = document.createElement("a");
  let textFormat = `${text.split("|").filter((data) => data != false)}`;

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textFormat)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function Start() {
  let removeType = document.querySelector("#remove-card").value;
  let Collection = document.querySelector("#collection").value;
  let qtn = document.querySelector("#qtn").value;
  let BoosterBox = document.querySelector("#box").title;

  if (BoosterBox === "true") {
    BoosterBox = true;
  } else {
    BoosterBox = false;
  }

  draw(qtn, BoosterBox, Collection, removeType);
}

//botão para escolher boosters individual ou box.
//botão para escolher  coleção ou tds por padrão, se vai ter ataque ou n
// uma selection para baixar um txt com uma lista de tds os cards
//input para quantidade de boosters
// depois um botão para abrir tds os boosters

// booster txt para o download

function draw(qtn = 1, box = false, collection = false, Notype = false) {
  const packs = BoosterOpening(qtn, box, collection, Notype);

  const divDraw = document.querySelector("#id");
  let pack1 = packs.map((booster) =>
    booster.map((cards) => {
      return {
        title: cards.name,
        url: cards.url,
      };
    })
  );
  let makePack = () => {
    let html = "";
    let num = 0;
    pack1.forEach((cards) => {
      let imgHtml = "";
      cards.forEach((card) => {
        imgHtml += `<div> <h2 class="titleCard" >| ${card.title} |</h2> <img class="cardChaotic" src="${card.url} SameSite=Lax" alt=""></div>`;
      });
      num++;
      html += `<h2 class="ml-auto mr-auto " >Booster ${num} </h2><div class="pack">${imgHtml}</div>`;
    });
    return html;
  };

  divDraw.innerHTML = `
<div>
<div class="openBoosters">
${makePack()}
</div>
</div>`;
}

function Booster(
  ultra = false,
  superrare = false,
  collection = false,
  Notype = false
) {
  let cards = [];
  let {
    cardsCommom,
    cardsUncommom,
    cardsRare,
    cardsSuperRare,
    cardsUltraRare,
  } = collectionFilter(collection, Notype);

  for (let i = 0; i < 4; i++) {
    let randomNum = rate.getRandomIntInclusive(0, cardsCommom.length - 1) || 0;
    cards.push(cardsCommom[randomNum]);
  }

  for (let i = 0; i < 3; i++) {
    let randomNum =
      rate.getRandomIntInclusive(0, cardsUncommom.length - 1) || 0;
    cards.push(cardsUncommom[randomNum]);
  }

  if (ultra) {
    cards.push(
      cardsUltraRare[
        rate.getRandomIntInclusive(0, cardsUltraRare.length - 1) || 0
      ]
    );
    cards.push(
      cardsRare[rate.getRandomIntInclusive(0, cardsRare.length - 1) || 0]
    );
    return cards;
  }

  if (superrare) {
    cards.push(
      cardsSuperRare[
        rate.getRandomIntInclusive(0, cardsSuperRare.length - 1) || 0
      ]
    );
    cards.push(
      cardsRare[rate.getRandomIntInclusive(0, cardsRare.length - 1) || 0]
    );
    return cards;
  }

  if (rate.chance(1)) {
    cards.push(
      cardsPromo[rate.getRandomIntInclusive(0, cardsPromo.length - 1) || 0]
    );
  }

  if (rate.chance(5)) {
    cards.push(
      cardsUltraRare[
        rate.getRandomIntInclusive(0, cardsUltraRare.length - 1) || 0
      ]
    );
    cards.push(
      cardsRare[rate.getRandomIntInclusive(0, cardsRare.length - 1) || 0]
    );
    return cards;
  }

  if (rate.chance(30)) {
    cards.push(
      cardsSuperRare[
        rate.getRandomIntInclusive(0, cardsSuperRare.length - 1) || 0
      ]
    );
    cards.push(
      cardsRare[rate.getRandomIntInclusive(0, cardsRare.length - 1) || 0]
    );
    return cards;
  }

  cards.push(
    cardsRare[rate.getRandomIntInclusive(0, cardsRare.length - 1) || 0]
  );
  cards.push(
    cardsRare[rate.getRandomIntInclusive(0, cardsRare.length - 1) || 0]
  );
  return cards;
}

function BoosterOpening(
  boostersNum = false,
  box = false,
  collection = false,
  Notype = false
) {
  let boosters = boostersNum;
  let result = [];
  if (box) {
    for (let i = 0; i < boosters; i++) {
      for (let i = 0; i < 24; i++) {
        if (i === 15) {
          let superRare = 0;
          let ultraRare = 0;
          let cardsRoll = result.map((booster) =>
            booster.map(
              (card) =>
                card.cardtype.filter(
                  (rarety) =>
                    rarety.title == "commom" ||
                    rarety.title == "uncommon" ||
                    rarety.title == "rare" ||
                    rarety.title == "super rare" ||
                    rarety.title == "ultra rare"
                )[0]
            )
          );

          cardsRoll.forEach((booster) => {
            booster.forEach((rarety) => {
              if (rarety.title === "super rare") superRare++;
              if (rarety.title === "ultra rare") ultraRare++;
            });
          });

          if (superRare < 8) {
            let min = 8 - superRare;
            i = i + min;
            for (let n = 0; n <= min; n++) {
              result.push(Booster(false, true, collection, Notype));
            }
          }

          if (ultraRare < 1) {
            let min = 1 - ultraRare;
            i = i + min;
            for (let n = 0; n < min; n++) {
              result.push(Booster(true, false, collection, Notype));
            }
          }

          if (superRare >= 8 && ultraRare >= 1) {
            result.push(Booster(false, false, collection, Notype));
          }
        } else {
          result.push(Booster(false, false, collection, Notype));
        }
      }
    }

    return result;
  } else {
    for (let i = 0; i < boosters; i++) {
      result.push(Booster(false, false, collection, Notype));
    }
    return result;
  }
}

function collectionFilter(collectionFilter = false, Notype = false) {
  if (collectionFilter == "false") collectionFilter = false;

  const cards = cardsJson.filter((card) => {
    let noRecode = [];
    let notype = card.cardtype.filter(
      (cardtype) => cardtype.title === `${Notype}`
    );
    let collection = card.cardtype.filter(
      (cardtype) => cardtype.title === `${collectionFilter}`
    );

    if (collectionFilter && Notype) {
      return (
        collection.length > 0 && noRecode.length === 0 && notype.length === 0
      );
    }

    if (collectionFilter) {
      return collection.length > 0 && noRecode.length === 0;
    }

    if (Notype) {
      return notype.length === 0 && noRecode.length === 0;
    }

    return card.name.length > 0;
  });

  return raretyFilter(cards);

  function raretyFilter(cards) {
    const cardsCommom = cards.filter((card) => {
      let rarety = card.cardtype.filter(
        (cardtype) => cardtype.title === "commom" && cardtype.title !== "promo"
      );

      return rarety.length > 0;
    });

    const cardsUncommom = cards.filter((card) => {
      let rarety = card.cardtype.filter(
        (cardtype) =>
          cardtype.title === "uncommon" && cardtype.title !== "promo"
      );

      return rarety.length > 0;
    });

    const cardsRare = cards.filter((card) => {
      let rarety = card.cardtype.filter(
        (cardtype) => cardtype.title === "rare" && cardtype.title !== "promo"
      );

      return rarety.length > 0;
    });

    const cardsSuperRare = cards.filter((card) => {
      let rarety = card.cardtype.filter(
        (cardtype) =>
          cardtype.title === "super rare" && cardtype.title !== "promo"
      );

      return rarety.length > 0;
    });

    const cardsUltraRare = cards.filter((card) => {
      let rarety = card.cardtype.filter(
        (cardtype) =>
          cardtype.title === "ultra rare" && cardtype.title !== "promo"
      );

      return rarety.length > 0;
    });

    const cardsPromo = cards.filter((card) => {
      let rarety = card.cardtype.filter(
        (cardtype) => cardtype.title === "promo"
      );

      return rarety.length > 0;
    });

    return {
      cardsCommom,
      cardsUncommom,
      cardsRare,
      cardsSuperRare,
      cardsUltraRare,
      cardsPromo,
    };
  }
}

//CriarJSON.Escrever("./emojis.json", emojilist)
