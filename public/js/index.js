// codigo de collection da pagina antiga, sistema de numeração de pagiana e geração dinamica deve ser reaproveitado

try {
  var cards = cardsJson.sort(function (a, b) {
    result = a.name >= b.name ? 1 : -1;
    return result;
  });

  var urlParams = location.search.length > 0 ? location.search.slice(1) : "p=1";

  var pageNum = urlParams.split("=")[1];
  var pageLimit = Math.round(cards.length / 52);
  if (pageNum > pageLimit) location.replace("?p=1");

  let pagesList = [...document.getElementsByClassName("numerapage")];
  let lastPages = [...document.getElementsByClassName("ultimapage")];
  var pageListNum =
    pageNum >= pageLimit || pageNum >= pageLimit - 2
      ? pageNum - 4
      : pageNum - 1;
  console.log(pageListNum);
  pagesList.forEach((link) => {
    pageListNum++;
    link.innerHTML = `
     <a class=" ml-auto mr-2 numerapage" href="?p=${pageListNum}" class="mr-2">${pageListNum}</a>
     `;
  });

  var lastPageNum = pageLimit - 3;
  lastPages.forEach((link) => {
    lastPageNum++;
    link.innerHTML = ` <a class=" mr-2 ml-2 ultimapage" href="?p=${lastPageNum}">${lastPageNum}</a>`;
  });

  var loopCounter = 52 * (pageNum - 1);
  var cardsRange = pageNum * 52;
  var idElement = document.getElementById("scans");

  for (let i = loopCounter; i < cardsRange; i++) {
    try {
      if (cards[i].name.length > 1) {
        let card = cards[i];
        idElement.innerHTML += ` <div id="${card.id}" onclick=pop_up(${card.id})>
                <h6  >${card.name}</h6>
                <img  src="${card.url}" crossorigin="anonymous"> <div class="popup">
                      <span class="popuptext"">${card.bodybr}</span>
                  </div> </img>
                
            </div>`;
      }
    } catch (error) {
      i = cardsRange;
      console.log(error);
    }
  }

  function pop_up(id) {
    let cardpopup = document.getElementById(id);

    cardpopup.getElementsByClassName("popuptext")[0].classList.toggle("show");
  }
} catch (error) {
  console.log(error);
}

// codigo danova pagina, gerar os cards mais usados dinamicamente pegando o valor da tribo pelo alt
try {
  var cardMostUsed = {
    danian: [
      `<div id="card.id"> <h6>AZAIA Mindprobe</h6> <a href="card.id"><img src="https://i.imgur.com/S2vfbgF.png" crossorigin="anonymous"></a> </img> </div>`,
      `<div id="card.id"> <h6>AZAIA Mindprobe</h6> <a href="card.id"><img src="https://i.imgur.com/S2vfbgF.png" crossorigin="anonymous"></a> </img> </div>`,
      `<div id="card.id"> <h6>AZAIA Mindprobe</h6> <a href="card.id"><img src="https://i.imgur.com/S2vfbgF.png" crossorigin="anonymous"></a> </img> </div>`,
      `<div id="card.id"> <h6>AZAIA Mindprobe</h6> <a href="card.id"><img src="https://i.imgur.com/S2vfbgF.png" crossorigin="anonymous"></a> </img> </div>`,
      `<div id="card.id"> <h6>AZAIA Mindprobe</h6> <a href="card.id"><img src="https://i.imgur.com/S2vfbgF.png" crossorigin="anonymous"></a> </img> </div>`,
      `<div id="card.id"> <h6>AZAIA Mindprobe</h6> <a href="card.id"><img src="https://i.imgur.com/S2vfbgF.png" crossorigin="anonymous"></a> </img> </div>`,
    ],
    mipedian: [],
    overworld: [],
    underworld: [],
    marr: [],
    generic: [],
    tribeFilter() {
      let tribeActive = this.getTribeActive();
      console.log(cardMostUsed[tribeActive]);
    },
    getTribeActive() {
      let $tribeActive = document.querySelector(
        "#tribe-selector .active"
      ).firstChild;
      return $tribeActive.getAttributeNode("name").value;
    },
  };

  // add event listerne onclick nos filtros pra ativar o metodo trivefilter assim pegando o html e jogando para uma fução dem udar o html dianmicamente.

  cardMostUsed.tribeFilter();
} catch (error) {
  console.log(error);
}
