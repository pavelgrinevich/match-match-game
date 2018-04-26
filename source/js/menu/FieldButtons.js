export default class FieldButtons {
  constructor(callback) {
    this.callback = callback;

    this.buttonLeaveGame = document.querySelector('#field-leavegame');
    this.buttonRestart = document.querySelector('#field-restart');

    this.setButtonsAction();
  }

  setButtonsAction() {
    this.buttonLeaveGame.addEventListener('mouseup', () => {
      this.callback('mainMenu');
    })

    this.buttonRestart.addEventListener('mouseup', () => {
      this.callback('restart');
    })
  }
}
