export default class DrawingGame {
  constructor(config) {
    this.config = config;

    this.wrapperClassName = 'match-match-game';
    this.wrapper = document.querySelector(`.${this.wrapperClassName}`);
    this.playingField = document.querySelector('.playing-field');

    this.cardBackItems = [];

    this.drawNewGameField();
  }

  drawNewGameField(cardsArray) {
    this.wrapper.className = `${this.wrapperClassName} ${this.config.level}`;

    const cardBack = this.config.cardBackArray[this.config.cardBack];
    const numberOfCards = this.config.numberOfCards; 

    while (this.playingField.firstChild) {
      this.playingField.removeChild(this.playingField.firstChild);
    }

    for (let i = 0; i < numberOfCards; i++) {
      const divCardContainer = document.createElement('div');
      const divCard = document.createElement('div');
      const divFront = document.createElement('div');
      const divBack = document.createElement('div');

      this.cardBackItems.push(divBack);

      divCardContainer.classList.add('card-container');
      divCard.classList.add('card');
      divBack.classList.add('back');
      divBack.style.backgroundImage = `url(${cardBack})`;

      if (cardsArray) {
        divFront.classList.add('front');
        divFront.style.backgroundImage = `url(${cardsArray[i]})`;
        divCard.appendChild(divFront);
      }
      
      divCard.appendChild(divBack);
      divCardContainer.appendChild(divCard);
      this.playingField.appendChild(divCardContainer);
    }
  }

  setCardBack() {
    const cardBack = this.config.cardBackArray[this.config.cardBack];

    for (let i = 0; i < this.cardBackItems.length; i++) {
      this.cardBackItems[i].style.backgroundImage = `url(${cardBack})`;
    }
  }
}
