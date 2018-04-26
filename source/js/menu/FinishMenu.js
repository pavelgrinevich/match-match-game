export default class FinishMenu {
  constructor(callback) {
    this.callback = callback;

    this.finishCongrats = document.querySelector('#finish-congrats');
    this.finishInfo = document.querySelector('#finish-info');
    this.buttonMainMenu = document.querySelector('#finish-menu');
    this.buttonRestart = document.querySelector('#finish-restart');

    this.setButtonsAction();
  }

  addData(config) {
    this.finishCongrats.innerHTML = 
      `Congratulations! You got ${config.score} points and took ${config.place}th place.`;
    this.finishInfo.innerHTML = 
      `Your time: ${config.time}. It took you ${config.countOfSteps} steps.`;
  }

  setButtonsAction() {
    this.buttonMainMenu.addEventListener('mouseup', () => {
      this.callback('mainMenu');
    })

    this.buttonRestart.addEventListener('mouseup', () => {
      this.callback('restart');
    })
  }
}