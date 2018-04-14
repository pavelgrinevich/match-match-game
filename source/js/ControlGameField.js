export default class ControlGameField {
  constructor(config, callbackControl) {
    this.config = config;
    this.callbackControl = callbackControl;
    this.cardBack = this.config.cardBackArray[this.config.cardBack];

    this.wrapperClassName = 'match-match-game';
    this.wrapper = document.getElementsByClassName(this.wrapperClassName)[0];
    this.playingField = document.getElementsByClassName('playing-field')[0];

    this.cardBackItems = [];

    this.setSizes();
    this.drawPrestartField();
  }

  setSizes() {
    this.wrapper.className = `${this.wrapperClassName} ${this.config.level}`;

    switch (this.config.level) {
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
      const divCardContainer = document.createElement('div');
      const divCard = document.createElement('div');
      const divBack = document.createElement('div');

      this.cardBackItems.push(divBack);

      divCardContainer.classList.add('card-container');
      divCard.classList.add('card');
      divBack.classList.add('back');
      divBack.style.backgroundImage = `url(${this.cardBack})`;

      divCard.appendChild(divBack);
      divCardContainer.appendChild(divCard);
      this.playingField.appendChild(divCardContainer);
    }
  }

  setLevel() {
    this.setSizes();
    this.drawPrestartField();
  }

  setCardBack() {
    this.cardBack = this.config.cardBackArray[this.config.cardBack];

    for (let i = 0; i < this.cardBackItems.length; i++) {
      this.cardBackItems[i].style.backgroundImage = `url(${this.cardBack})`;
    }
  }

  createNewGame(cardsArray) {
    while (this.playingField.firstChild) {
      this.playingField.removeChild(this.playingField.firstChild);
    }

    for (let i = 0; i < this.numberOfCards; i++) {
      const divCardContainer = document.createElement('div');
      const divCard = document.createElement('div');
      const divFront = document.createElement('div');
      const divBack = document.createElement('div');

      divCardContainer.classList.add('card-container');
      divCard.classList.add('card');
      divFront.classList.add('front');
      divBack.classList.add('back');
      divFront.style.backgroundImage = `url(${cardsArray[i]})`;
      divBack.style.backgroundImage = `url(${this.cardBack})`;

      divCard.appendChild(divFront);
      divCard.appendChild(divBack);
      divCardContainer.appendChild(divCard);
      this.playingField.appendChild(divCardContainer);

      const handlerMouseup = () => {
        divCard.classList.add('rotate');
        divCard.removeEventListener('mouseup', handlerMouseup);
        
        const handlerTransitionend = () => {
          this.callbackControl('compare', divCard, handlerMouseup);
          divCard.removeEventListener('transitionend', handlerTransitionend);
        }

        divCard.addEventListener('transitionend', handlerTransitionend);
      }

      divCard.addEventListener('mouseup', handlerMouseup);
    }
  }

  leaveGame() {
    this.drawPrestartField();
  }
}
