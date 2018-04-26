export default class MainControl {
  constructor(config) {
    this.config = config;
    
    this.comparedCardsArray = [];
    this.countOfGuessedCards = 0;
    this.countOfSteps = 0;

    // create canvas fot timer (for fast render)
    this.timerAnimation;

    this.canvasTimer = document.querySelector('canvas').getContext('2d');
    this.canvasTimer.fillStyle = 'rgb(255, 255, 255)';
    this.canvasTimer.font = 'bold 27px arial, helvetica, sans-serif';
    this.canvasTimer.fillText(this.config.time, 10, 30);
  }

  timer(flag = 'stop') {
    window.cancelAnimationFrame(this.timerAnimation);

    if (flag === 'start') {
      const startDate = new Date();

      const calcTimer = () => {
        let newDate = new Date() - startDate;

        let ms = Math.abs(Math.floor(newDate/10)%100);
        let sec = Math.abs(Math.floor(newDate/1000)%60);
        let min = Math.abs(Math.floor(newDate/1000/60)%60);

        if (ms.toString().length === 1) ms = '0' + ms;
        if (sec.toString().length === 1) sec = '0' + sec;
        if (min.toString().length === 1) min = '0' + min;

        this.config.time = `${min}:${sec}:${ms}`

        this.canvasTimer.clearRect(0, 0, 120, 40);
        this.canvasTimer.fillText(this.config.time, 10, 30);

        this.timerAnimation = window.requestAnimationFrame(calcTimer);
      }

      calcTimer();
    }
  }

  startNewGame() {
    this.timer('start');

    const playingField = document.querySelector('.playing-field');  
    const divCard = playingField.childNodes;

    for (let i = 0; i < divCard.length; i++) {
      const handlerMouseup = () => {
        divCard[i].firstChild.classList.add('rotate');
        divCard[i].firstChild.removeEventListener('mouseup', handlerMouseup);
        
        const handlerTransitionend = () => {
          this.compareCards(divCard[i].firstChild, handlerMouseup);
          divCard[i].firstChild.removeEventListener('transitionend', handlerTransitionend);
        }
  
        divCard[i].firstChild.addEventListener('transitionend', handlerTransitionend);
      }
  
      divCard[i].firstChild.addEventListener('mouseup', handlerMouseup);
    }
  }

  stopGame(flag = false) {
    this.timer('stop');
    this.config.countOfSteps = this.countOfSteps;

    this.countOfSteps = 0;
    this.countOfGuessedCards = 0;
    this.comparedCardsArray = [];
    
    if (flag) this.config.callbackControl('finish');
  }

  compareCards(card, handlerMouseup) {
    const numberOfCards = this.config.numberOfCards;

    this.comparedCardsArray.push([card, handlerMouseup]);

    this.countOfSteps += 1;

    if (this.comparedCardsArray.length >= 2) {
      if (
        this.comparedCardsArray[0][0].firstChild.style.backgroundImage 
        !== this.comparedCardsArray[1][0].firstChild.style.backgroundImage
      ) {
        this.comparedCardsArray[0][0].classList.remove('rotate');
        this.comparedCardsArray[1][0].classList.remove('rotate');

        this.comparedCardsArray[0][0].addEventListener('mouseup', this.comparedCardsArray[0][1]);
        this.comparedCardsArray[1][0].addEventListener('mouseup', this.comparedCardsArray[1][1]);
      } else {
        this.comparedCardsArray[0][0].classList.add('hide');
        this.comparedCardsArray[1][0].classList.add('hide');

        this.countOfGuessedCards += 2;
        if (this.countOfGuessedCards === numberOfCards) this.stopGame(true);
      }

      this.comparedCardsArray.splice(0, 2);
    }
  }
}
