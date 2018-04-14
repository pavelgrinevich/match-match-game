export default class DrawingMenu {
  constructor(config) {
    this.config = config;

    this.menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
    this.introMenu = document.getElementsByClassName('intro')[0];
    this.mainMenu = document.getElementsByClassName('menu')[0];
    this.menuControl = document.getElementsByClassName('menu-control')[0];
    this.menuCongrats = document.getElementsByClassName('menu-congrats')[0];
    this.cardBackSelect = document.getElementsByClassName('card-back')[0];
    this.difficultySelect = document.getElementsByClassName('difficulty')[0];
    this.ratingTable = document.getElementsByClassName('rating')[0];
  }

  show(flag) {
    switch (flag) {
      case 'menuWrapper':
        this.menuWrapper.style.display = 'block';
        break;
      case 'introMenu':
        this.introMenu.style.display = 'block';
        break;
      case 'mainMenu':
        this.mainMenu.style.display = 'block';
        break;
      case 'menuControl':
        this.menuControl.style.display = 'block';
        break;
      case 'menuCongrats':
        this.menuCongrats.style.display = 'block';
        break;
      case 'cardBackSelect':
        this.cardBackSelect.style.display = 'block';
        break;
      case 'difficultySelect':
        this.difficultySelect.style.display = 'block';
        break;
      case 'ratingTable':
        this.ratingTable.style.display = 'block';
        break;
    }

    return this;
  }

  hide(flag) {
    switch (flag) {
      case 'menuWrapper':
        this.menuWrapper.style.display = 'none';
        break;
      case 'introMenu':
        this.introMenu.style.display = 'none';
        break;
      case 'mainMenu':
        this.mainMenu.style.display = 'none';
        break;
      case 'menuControl':
        this.menuControl.style.display = 'none';
        break;
      case 'menuCongrats':
        this.menuCongrats.style.display = 'none';
        break;
      case 'cardBackSelect':
        this.cardBackSelect.style.display = 'none';
        break;
      case 'difficultySelect':
        this.difficultySelect.style.display = 'none';
        break;
      case 'ratingTable':
        this.ratingTable.style.display = 'none';
        break;
    }

    return this;
  }

  showIntro() {
    this.hide('mainMenu')
      .show('menuWrapper')
      .show('introMenu');
  }

  showMain() {
    if (this.ratingTable.firstChild) this.ratingTable.removeChild(this.ratingTable.firstChild);
    this.ratingTable.appendChild(this.config.ratingList);

    this.hide('introMenu')
      .hide('menuCongrats')
      .hide('cardBackSelect')
      .hide('difficultySelect')
      .show('menuWrapper')
      .show('mainMenu')
      .show('menuControl')
      .show('ratingTable');
  }

  showFinish() {
    if (this.ratingTable.firstChild) this.ratingTable.removeChild(this.ratingTable.firstChild);
    this.ratingTable.appendChild(this.config.ratingList);

    this.hide('introMenu')
      .hide('menuControl')
      .hide('cardBackSelect')
      .hide('difficultySelect')
      .show('menuWrapper')
      .show('mainMenu')
      .show('menuCongrats')
      .show('ratingTable');
  }

  showRatingTable() {
    this.hide('cardBackSelect')
      .hide('difficultySelect')
      .show('ratingTable');
  }

  showCardBackSelect() {
    this.hide('ratingTable')
      .hide('difficultySelect')
      .show('cardBackSelect');
  }

  showDifficultySelect() {
    this.hide('cardBackSelect')
      .hide('ratingTable')
      .show('difficultySelect');
  }

  hideAll() {
    this.hide('menuWrapper')
      .hide('introMenu')
      .hide('mainMenu')
      .hide('finishMenu');
  }
}
