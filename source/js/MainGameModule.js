export default class MainGameModule {
  constructor(config, callbackControl) {
    this.config = config;
    this.callbackControl = callbackControl;
    this.comparedCardsArray = [];

    this.count = 0;
  }

  start() {
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

  stop(flag = false) {
    if (flag) console.log('congrats');
    this.comparedCardsArray = [];
  }

  compareCards(card, handlerMouseup) {
    this.comparedCardsArray.push([card, handlerMouseup]);

    if (this.comparedCardsArray.length >= 2) {
      if (
        this.comparedCardsArray[0][0].firstChild.style.backgroundImage 
        !== this.comparedCardsArray[1][0].firstChild.style.backgroundImage
      ) {
        this.comparedCardsArray[0][0].classList.toggle('rotate');
        this.comparedCardsArray[1][0].classList.toggle('rotate');

        this.comparedCardsArray[0][0].addEventListener('mouseup', this.comparedCardsArray[0][1]);
        this.comparedCardsArray[1][0].addEventListener('mouseup', this.comparedCardsArray[1][1]);
      } else {

        this.comparedCardsArray[0][0].classList.add('hide');
        this.comparedCardsArray[1][0].classList.add('hide');

        this.count += 2;
        if (this.count === this.numberOfCards) this.stop(true);
      }

      this.comparedCardsArray.splice(0, 2);
    }
  }
}
