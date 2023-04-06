import CardsDB from "./dbModule.js";

const cardssort = new CardsDB().cards.sort(function (a, b) {
  let result = a.name >= b.name ? 1 : -1;
  return result;
});

export default class CardsData {
  constructor() {
    this.cards = cardssort;
  }

  CardtypeFilter(argfilter) {
    const filterResult = this.cards.filter(
      (card) =>
        card.cardtype.filter((type) => type.title == argfilter).length >= 1
    );
    return filterResult;
  }
}
