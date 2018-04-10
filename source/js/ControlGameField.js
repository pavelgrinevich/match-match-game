export default class ControlGameField {
  constructor(config) {
    this.cardBackArray = config.cardBackArray;
    this.cardBack = this.cardBackArray[config.cardBack];
    this.level = config.level;

    this.wrapperClassName = 'match-match-game';
    this.wrapper = document.getElementsByClassName(this.wrapperClassName)[0];
    this.playingField = document.getElementsByClassName('playing-field')[0];

    this.cardBackItems = [];

    this.setSizes();
    this.drawPrestartField();
  }

  setSizes() {
    this.wrapper.className = `${this.wrapperClassName} ${this.level}`;

    switch (this.level) {
      case 'easy':
        this.numberOfCards = 12;
        break;
      case 'average':
        this.numberOfCards = 18;
        break;
      case 'hard':
        this.numberOfCards = 24;
        break;
    }
  }

  drawPrestartField() {
    while (this.playingField.firstChild) {
      this.playingField.removeChild(this.playingField.firstChild);
    }

    for (let i = 0; i < this.numberOfCards; i++) {
      const divCardBack = document.createElement('div');
      this.cardBackItems.push(divCardBack);
      divCardBack.classList.add('card');
      divCardBack.style.backgroundImage = `url(${this.cardBack})`;
      this.playingField.appendChild(divCardBack);
    }
  }

  setLevel(level) {
    this.level = level;
    this.setSizes();
    this.drawPrestartField();
  }

  setCardBack(cardBack) {
    this.cardBack = this.cardBackArray[cardBack];

    for (let i = 0; i < this.cardBackItems.length; i++) {
      this.cardBackItems[i].style.backgroundImage = `url(${this.cardBack})`;
    }
  }

  createNewGame(cardsArray) {
    /*while (this.playingField.firstChild) {
      this.playingField.removeChild(this.playingField.firstChild);
    }*/
  }
}
