const cardDB = cardsJson;

const DOP = cardDB.filter(
  (card) =>
    card.cardtype.filter((type) => type.title == "dawn of perim").length >= 1
);
const menubtns = document
  .querySelectorAll(".menus-bar-button")
  .forEach((btn) => btn.addEventListener("click", activeMenu));
function activeMenu(param) {
  let btnmenu = param.target.dataset.menuOpen;
  let classButonActive = "menus-bar-button-active";
  let menuAtivo = "menu-ativo";
  let menuDes = "menu-desativado";

  let ativo = document.querySelector(`.${menuAtivo}`);
  ativo.classList.toggle(menuAtivo);
  ativo.classList.toggle(menuDes);

  let openmenu = document.querySelector(`.${btnmenu}`);
  openmenu.classList.toggle(menuDes);
  openmenu.classList.toggle(menuAtivo);
  let removeActiveBtn = document.querySelector(`.${classButonActive}`);
  removeActiveBtn.classList.toggle(classButonActive);
  param.target.classList.toggle(classButonActive);
}
