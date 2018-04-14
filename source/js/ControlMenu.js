import DrawingMenu from './DrawingMenu';
import IntroMenu from './IntroMenu';
import MainMenu from './MainMenu';
import FieldButtons from './FieldButtons';
import FinishMenu from './FinishMenu';

export default class ControlMenu {
  constructor(config, callbackControl) {
    this.config = config;
    this.callbackControl = callbackControl;

    this.drawing = new DrawingMenu();
    this.introMenu = new IntroMenu(this.config, this.handleAction, this);
    this.mainMenu = new MainMenu(this.config, this.handleAction, this);
    this.fieldButtons = new FieldButtons(this.handleAction, this);
    this.finishMenu = new FinishMenu();

    this.drawing.showIntro();
  }

  handleAction(ctx, flag) {
    switch (flag) {
      case 'newGame':
        ctx.drawing.hideAll();
        ctx.callbackControl('newGame');
        break;
      case 'ratingTable':
        ctx.drawing.showRatingTable();
        break;
      case 'cardBackSelect':
        ctx.drawing.showCardBackSelect();
        break;
      case 'difficultySelect':
        ctx.drawing.showDifficultySelect();
        break;
      case 'changeDifficulty':
        ctx.callbackControl('changeDifficulty');
        break;
      case 'changeCardBack':
        ctx.callbackControl('changeCardBack');
        break;
      case 'applyProfile':
        ctx.drawing.showMain();
        break;
      case 'leaveGame':
        ctx.drawing.showMain();
        break;
      case 'restart':
        ctx.callbackControl('newGame');
        break;
    }
  }
}
