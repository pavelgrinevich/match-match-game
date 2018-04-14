export default class FinishMenu {
  constructor(callback, ctx) {
    this.callback = callback;
    this.ctx = ctx;

    this.finishCongrats = document.getElementById('finish-congrats');
    this.finishInfo = document.getElementById('finish-info');
    this.buttonMainMenu = document.getElementById('finish-menu');
    this.buttonRestart = document.getElementById('finish-restart');

    this.setButtonsAction();
  }

  addData(finishObj) {
    this.finishCongrats.innerHTML = 
      `Congratulations! You got ${finishObj.score} points and took ${finishObj.place}th place.`;
    this.finishInfo.innerHTML = 
      `Your time: ${finishObj.time}. It took you ${finishObj.countOfSteps} steps.`;
  }

  setButtonsAction() {
    this.buttonMainMenu.addEventListener('mouseup', () => {
      this.callback(this.ctx, 'mainMenu');
    })

    this.buttonRestart.addEventListener('mouseup', () => {
      this.callback(this.ctx, 'restart');
    })
  }
}