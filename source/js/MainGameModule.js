export default class MainGameModule {
  constructor(config, callbackControl) {
    this.config = config;
    this.callbackControl = callbackControl;
    this.comparedCardsArray = [];

    this.renderTimer;
    this.time = '00:00:00';

    this.canvasTimer = document.getElementsByTagName('canvas')[0].getContext('2d');
    this.canvasTimer.fillStyle = 'rgb(255, 255, 255)';
    this.canvasTimer.font = 'bold 27px arial, helvetica, sans-serif';
    this.canvasTimer.fillText(this.time, 10, 30);

    this.count = 0;
  }

  setTimer(flag = 'stop') {
    window.cancelAnimationFrame(this.renderTimer);

    if (flag === 'start') {
      let startDate = new Date();

      const calcTimer = () => {
        let newDate = new Date() - startDate;

        let ms = Math.abs(Math.floor(newDate/10)%100);
        let sec = Math.abs(Math.floor(newDate/1000)%60);
        let min = Math.abs(Math.floor(newDate/1000/60)%60);

        if (ms.toString().length === 1) ms = '0' + ms;
        if (sec.toString().length === 1) sec = '0' + sec;
        if (min.toString().length === 1) min = '0' + min;
        
        if (+min > 90) startDate = new Date();

        this.time = `${min}:${sec}:${ms}`

        this.canvasTimer.clearRect(0, 0, 120, 40);
        this.canvasTimer.fillText(this.time, 10, 30);

        this.renderTimer = window.requestAnimationFrame(calcTimer);
      }

      this.renderTimer = window.requestAnimationFrame(calcTimer);
    }
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

    this.setTimer('start');
  }

  stop(flag = false) {
    this.setTimer('stop');
    this.comparedCardsArray = [];
    
    if (flag) { 
      alert(`Your time: ${this.time}`);
    }
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
