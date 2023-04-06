import Criatura from "../Criatura.js";

const stats = {
  name: "chaor",
  types: [
    { id: 1, title: "creature" },
    { id: 55, title: "unique" },
    { id: 10, title: "underworld" },
    { id: 21, title: "fire" },
    { id: 40, title: "loyal" },
    { id: 87, title: "ultra rare" },
    { id: 88, title: "dawn of perim" },
    { id: 56, title: "warrior" },
    { id: 68, title: "conqueror" },
  ],
  discipline: {
    courage: 95,
    power: 90,
    wisdom: 70,
    speed: 60,
  },
  energy: 70,
  mc: 3,
  elements: ["fire"],
};
class Chaor extends Criatura {
  constructor() {
    super();
    this.name = stats.name;
    this.types = stats.types;
    this.discipline = stats.discipline;
    this.energy = stats.energy;
    this.elements = stats.elements;
    this.mc = stats.mc;
    this.habilidades = {
      habilidade1: {
        tipe: "ativa",
        text: "3 Mugic Counter: Negue um Mugic ou habilidade  OverWorld  que tem como alvo Chaor. Unique, Loyal",
        habimet: this.HabilidadeAtiva,
      },
    };
    this.update = {
      name: this.name,
      types: [...this.types],
      discipline: { ...this.discipline },
      energy: this.energy,

      elements: [...this.elements],
      mc: this.mc,
      habilidades: { ...this.habilidades },
    };
  }

  HabilidadeAtiva(burstData) {
    const mugic = burstData.mugic;
    const custo = -3;
    if ((mugic.target = this.name && mugic.cardtypeid === 9 && this.mc >= 3)) {
      this.mc += custo;
      const logmanssage = "Chaor concelou o mugic " + mugic.name;
      console.log(logmanssage.toUpperCase());
    }
  }
}

export default Chaor;
// this.updatecreature = {
//   types: stats.types,
//   discipline: stats.discipline,
//   energy: stats.energy,
//   elements: stats.elements,
//   mc: stats.mc
// }
