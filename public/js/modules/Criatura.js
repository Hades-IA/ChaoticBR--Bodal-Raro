export default class Criatura {
  constructor() {
    this.mainType = "creature";
    this.xp = 0;
    this.lvl = 1;
    this.lvlup = 15;
  }
  Atkpool(cardsAtk) {
    this.atks = cardsAtk;
  }
  CreateCard(stats) {
    this.name = stats.name;
    this.types = stats.types;
    this.discipline = stats.discipline;
    this.energy = stats.energy;
    this.elements = stats.elements;
    this.mc = stats.mc;
    this.update = {
      name: this.name,
      types: [...this.types],
      discipline: { ...this.discipline },
      energy: this.energy,

      elements: [...this.elements],
      mc: this.mc,
      habilidades: { ...this.habilidades },
    };
    return this;
  }
  Levelup(xp) {
    this.xp += xp;
    if (xp > lvlup) {
      this.lvl++;
      this.lvlup += 15;
      return console.log("biude de nivel para " + this.lvl);
    }

    return console.log("ganhou " + xp + "de xp");
  }
  Update(atribute, upvalue, subatribute) {
    switch (atribute) {
      case "discipline":
        this.update.discipline[subatribute] = upvalue;
        break;
      case "energy":
        this.update.energy = upvalue;
        break;
      case "name":
        this.update.name = upvalue;
        break;
      case "types":
        this.update.types = upvalue;
        break;
      case "elements":
        this.update.elements = upvalue;
        break;
      case "mc":
        this.update.mc = upvalue;
        break;
      case "habilidades":
        this.update.habilidades = upvalue;
        break;
    }

    return this;
  }
}
