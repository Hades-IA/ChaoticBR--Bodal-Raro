// codigo de collection da pagina antiga, sistema de numeração de pagiana e geração dinamica deve ser reaproveitado
async function starter() {
  try {
    let cardsJson = await fetch("./database/db.json")
      .then((response) => response.json())
      .then((json) => json.data);

    var cards = cardsJson.sort(function (a, b) {
      result = a.name >= b.name ? 1 : -1;
      return result;
    });
    var urlParams =
      location.search.length > 0 ? location.search.slice(1) : "p=1";
    var pageNum = urlParams.split("=")[1];
    pageList(pageNum, cards);
    createCArdList(pageNum, cards);
  } catch (error) {
    console.log(error);
  }
}

function pageList(pageNum, cards) {
  var pageLimit = Math.round(cards.length / 52);
  if (pageNum > pageLimit || pageNum < 1) location.replace("?p=1");

  let pagesList = [...document.getElementsByClassName("numerapage")];
  let lastPages = [...document.getElementsByClassName("ultimapage")];
  var pageListNum =
    pageNum >= pageLimit || pageNum >= pageLimit - 2
      ? pageNum - 4
      : pageNum - 1;

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
}
function createCArdList(pageNum, cards) {
  var loopCounter = 52 * (pageNum - 1);
  var cardsRange = pageNum * 52;
  var idElement = document.getElementById("scans");

  for (let i = loopCounter; i < cardsRange; i++) {
    try {
      if (cards[i].name.length > 1) {
        let card = cards[i];
        idElement.innerHTML += ` <div id="${card.id}" onclick=pop_up(${card.id})>
              <h6  >${card.name}</h6>
              <img  src="${card.url}" SameSite=Lax crossorigin="anonymous"> <div class="popup">
                    <span class="popuptext"">${card.bodybr}</span>
                </div> </img>
                <p>
                ${card.bodybr}
                </p>
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
}
starter();
// add event listerne onclick nos filtros pra ativar o metodo trivefilter assim pegando o html e jogando para uma fução dem udar o html dianmicamente.
