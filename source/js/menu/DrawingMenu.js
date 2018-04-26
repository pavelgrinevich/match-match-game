export default class DrawingMenu {
  constructor(config) {
    this.config = config;

    this.menuWrapper = document.querySelector('.menu-wrapper');
    this.introMenu = document.querySelector('.intro');
    this.mainMenu = document.querySelector('.menu');
    this.menuControl = document.querySelector('.menu-control');
    this.menuCongrats = document.querySelector('.menu-congrats');
    this.cardBackSelect = document.querySelector('.card-back');
    this.difficultySelect = document.querySelector('.difficulty');
    this.ratingTable = document.querySelector('.rating');
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
    this.ratingTable.appendChild(this.config.ratingTable);

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
    this.ratingTable.appendChild(this.config.ratingTable);

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
