import DrawingMenu from './menu/DrawingMenu';
import IntroMenu from './menu/IntroMenu';
import MainMenu from './menu/MainMenu';
import FieldButtons from './menu/FieldButtons';
import FinishMenu from './menu/FinishMenu';

export default class MenuControl {
  constructor(config) {
    this.config = config;

    const callbackMenu = this.handleAction.bind(this);

    this.drawing = new DrawingMenu(this.config);
    this.introMenu = new IntroMenu(this.config, callbackMenu);
    this.mainMenu = new MainMenu(this.config, callbackMenu);
    this.fieldButtons = new FieldButtons(callbackMenu);
    this.finishMenu = new FinishMenu(callbackMenu);

    this.drawing.showIntro();
  }

  handleAction(flag) {
    switch (flag) {
      case 'newGame':
        this.drawing.hideAll();
        this.config.callbackControl('newGame');
        break;
      case 'ratingTable':
        this.drawing.showRatingTable();
        break;
      case 'cardBackSelect':
        this.drawing.showCardBackSelect();
        break;
      case 'difficultySelect':
        this.drawing.showDifficultySelect();
        break;
      case 'changeDifficulty':
        this.config.callbackControl('changeDifficulty');
        break;
      case 'changeCardBack':
        this.config.callbackControl('changeCardBack');
        break;
      case 'applyProfile':
        this.drawing.showMain();
        break;
      case 'mainMenu':
        this.drawing.showMain();
        this.config.callbackControl('mainMenu');
        break;
      case 'restart':
        this.drawing.hideAll();
        this.config.callbackControl('restart');
        break;
    }
  }

  showFinish(finishObj) {
    this.finishMenu.addData(this.config);
    this.drawing.showFinish();
  }
}
