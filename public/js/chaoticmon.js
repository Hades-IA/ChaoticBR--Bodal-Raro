import CardsData from "./modules/CardsData.js";
import Chaor from "./modules/criaturas/Chaor.js";
const cardDB = new CardsData();

const DOP = cardDB.CardtypeFilter("dawn of perim");
const AtksDOP = filterCards(DOP, "creature");
const $menubtns = getElementDOM(".menus-bar-button").forEach((btn) =>
  btn.addEventListener("click", activeMenu)
);

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

function filterCards(arraydata = [], filtertext = "", prop = false) {
  if (prop && prop !== "cardtype") {
    console.log(prop);
    const resultfilter = arraydata.filter((card) => card[prop] === filtertext);
    return resultfilter;
  }
  const resultfilter = arraydata.filter(
    (card) =>
      card.cardtype.filter((type) => type.title == filtertext).length >= 1
  );
  return resultfilter;
}

function getElementDOM(element) {
  const $element = document.querySelectorAll(element);

  return $element;
}

function battleStart() {
  const player = {
    color: "black",
  };
  const Creature1 = new Chaor();

  const energyBarP1 = EnergyBar(Creature1, player);
  const reduzenergia = setInterval(() => {
    if (energyBarP1.creature.update.energy <= 0) {
      console.log(Creature1, "fim do set");
      clearInterval(reduzenergia);
    } else {
      console.log(energyBarP1.ReduzirEnergy(50));
    }
  }, 1 * 1000);

  console.log(
    StatsBar(Creature1, player).AumentarStat("courage", 100),

    "mudando stats"
  );
}

function EnergyBar(creature, player) {
  const $battle_energyBarbg = getElementDOM(
    `#battle-creature-${player.color} .energy-bar-atual`
  )[0];
  const $battle_energyBarNum = getElementDOM(
    `#battle-creature-${player.color} .energy-bar-num`
  )[0];
  const $battle_energyBarPorcent = getElementDOM(
    `#battle-creature-${player.color} .energy-bar-porcent`
  )[0];
  const { update } = creature;
  let inicial = creature.energy;
  function ReduzirEnergy(modification) {
    let reduz = update.energy - modification;

    let porcent = checkPorctNum(reduz);
    let reduzporct = checkNagative(Math.floor((reduz / inicial) * 100));
    $battle_energyBarNum.innerText = checkNagative(reduz);
    $battle_energyBarPorcent.innerText = reduzporct + "%";
    $battle_energyBarbg.style.height = `${porcent}%`;

    update.energy = checkNagative(reduz);

    return this;
  }
  function AumentarEnergy(modification) {
    let aumentar = update.energy + modification;
    let porcent = checkPorctNum(aumentar);
    let aumentarporct = Math.floor((aumentar / inicial) * 100);
    $battle_energyBarNum.innerText = aumentar;
    $battle_energyBarPorcent.innerText = aumentarporct + "%";

    $battle_energyBarbg.style.height = `${porcent}%`;

    update.energy = aumentar;
    return this;
  }

  return {
    player,
    creature,
    AumentarEnergy,
    ReduzirEnergy,
  };
}

function StatsBar(creature, player) {
  const $stats = getElementDOM(`#battle-creature-${player.color} .stats ul li`);
  const [$courage, $power, $wisdom, $speed] = $stats;
  const courage = $courage.children[1];
  const power = $power.children[1];
  const wisdom = $wisdom.children[1];
  const speed = $speed.children[1];

  function AumentarStat(discipline, rise) {
    let result = {
      courage: +courage.innerText + rise,
      power: +power.innerText + rise,
      wisdom: +wisdom.innerText + rise,
      speed: +speed.innerText + rise,
    };

    statsChange(discipline, result);
    return this;
  }
  function ReduzirStat(discipline, lower) {
    let result = {
      courage: checkNagative(+courage.innerText - lower),
      power: checkNagative(+power.innerText - lower),
      wisdom: checkNagative(+wisdom.innerText - lower),
      speed: checkNagative(+speed.innerText - lower),
    };
    statsChange(discipline, result);
    return this;
  }
  function ResetStats(discipline) {
    let result = {
      courage: creature.discipline.courage,
      power: creature.discipline.power,
      wisdom: creature.discipline.wisdom,
      speed: creature.discipline.speed,
    };
    statsChange(discipline, result);
    return this;
  }

  function statsChange(discipline, result) {
    switch (discipline) {
      case "courage":
        creature.Update("discipline", result[discipline], discipline);
        courage.innerText = `${result[discipline]}`;
        break;
      case "power":
        creature.Update("discipline", result[discipline], discipline);

        power.innerText = `${result[discipline]}`;
        break;
      case "wisdom":
        creature.Update("discipline", result[discipline], discipline);
        wisdom.innerText = `${result[discipline]}`;
        break;
      case "speed":
        creature.Update("discipline", result[discipline], discipline);
        speed.innerText = `${result[discipline]}`;
        break;
      case "all":
        creature.Update("discipline", result.courage, "courage");
        creature.Update("discipline", result.power, "power");
        creature.Update("discipline", result.wisdom, "wisdom");
        creature.Update("discipline", result.speed, "speed");

        courage.innerText = `${result.courage}`;
        power.innerText = `${result.power}`;
        wisdom.innerText = `${result.wisdom}`;
        speed.innerText = `${result.speed}`;
        break;
    }
  }
  return {
    AumentarStat,
    ReduzirStat,
    ResetStats,
    creature,
    player,
  };
}

function checkPorctNum(num) {
  if (num > 100) {
    return 100;
  } else if (num < 0) {
    return 0;
  } else {
    return num;
  }
}
function checkNagative(num) {
  if (num < 0) {
    return 0;
  } else {
    return num;
  }
}
battleStart();
