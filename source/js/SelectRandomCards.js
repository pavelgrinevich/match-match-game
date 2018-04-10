export default class SelectRandomCards {
  constructor(defaultCardsArray) {
    this.defaultCardsArray = defaultCardsArray
    
  }

  setLevel(level = 'average') {
    switch (level) {
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
    let cardsArray = this.defaultCardsArray.slice();
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
