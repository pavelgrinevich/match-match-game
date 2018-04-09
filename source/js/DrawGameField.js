import cardBack1 from '../images/card-back1.jpg';
import cardBack2 from '../images/card-back2.jpg';
import cardBack3 from '../images/card-back3.jpg';
import cardBack4 from '../images/card-back4.jpg';
import cardBack5 from '../images/card-back5.jpg';

export default class DrawGameField {
  constructor(config) {
    this.cardBackArray = [cardBack1, cardBack2, cardBack3, cardBack4, cardBack5];
    this.cardBack = this.cardBackArray[config.cardBack];
    this.level = config.level;

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

    this.wrapperClassName = 'match-match-game';
    this.wrapper = document.getElementsByClassName(this.wrapperClassName)[0];
    this.playingField = document.getElementsByClassName('playing-field')[0];

    this.setSizes();
    this.drawPrestartField();
  }

  setSizes() {
    this.wrapper.className = `${this.wrapperClassName} ${this.level}`;
  }

  drawPrestartField() {
    for (let i = 0; i < this.numberOfCards; i++) {
      const divCardBack = document.createElement('div');
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
    //this.drawPrestartField();
  }

  createNewGame(cardsArray) {

  }
}
