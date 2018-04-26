export default class RandomCards {
  constructor(config) {
    this.config = config;
  }

  getRandomCardsArray() {
    const numberOfCards = this.config.numberOfCards;
    
    let cardsArray = this.config.defaultCardsArray.slice();
    let randomCardsArray = [];

    for (let i = 0; i < numberOfCards; i++) {
      if (randomCardsArray.length === numberOfCards / 2) cardsArray = randomCardsArray.slice();

      randomCardsArray.push(
        cardsArray.splice(Math.floor(Math.random() * cardsArray.length), 1)[0]
      );
    }

    return randomCardsArray;
  }
}
