export default class SelectRandomCards {
  constructor(config) {
    this.config = config;
  }

  setLevel() {
    switch (this.config.level) {
      case 'easy':
        this.numberOfCards = 6;
        break;
      case 'average':
        this.numberOfCards = 9;
        break;
      case 'hard':
        this.numberOfCards = 12;
        break;
    }
  }

  getCardsArray() {
    this.setLevel();
    
    let cardsArray = this.config.defaultCardsArray.slice();
    let randomCardsArray = [];

    for (let i = 0; i < this.numberOfCards; i++) {
      randomCardsArray.push(
        cardsArray.splice(Math.floor(Math.random() * cardsArray.length), 1)[0]
      );
    }

    cardsArray = randomCardsArray.concat(randomCardsArray);
    randomCardsArray = [];

    for (let i = 0, l = cardsArray.length; i < l; i++) {
      randomCardsArray.push(
        cardsArray.splice(Math.floor(Math.random() * cardsArray.length), 1)[0]
      );
    }

    return randomCardsArray;
  }
}
