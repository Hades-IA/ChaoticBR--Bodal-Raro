import Criatura from "./Criatura";

export default class Atks {
  constructor(metadata) {
    this.name = metadata.name;
    this.mainType = "atk";
    this.types = metadata.types;
    this.elements = metadata.elements;
    this.BPcost = metadata.BPcost;
  }
}
