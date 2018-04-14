export default class FieldButtons {
  constructor(callback, ctx) {
    this.callback = callback;
    this.ctx = ctx;

    this.buttonLeaveGame = document.getElementById('field-leavegame');
    this.buttonRestart = document.getElementById('field-restart');

    this.setButtonsAction();
  }

  setButtonsAction() {
    this.buttonLeaveGame.addEventListener('mouseup', () => {
      this.callback(this.ctx, 'mainMenu');
    })

    this.buttonRestart.addEventListener('mouseup', () => {
      this.callback(this.ctx, 'restart');
    })
  }
}