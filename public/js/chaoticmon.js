const cardDB = cardsJson;

const DOP = cardDB.filter(
  (card) =>
    card.cardtype.filter((type) => type.title == "dawn of perim").length >= 1
);
