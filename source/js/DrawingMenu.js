export default class DrawingMenu {
  constructor() {
    this.menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
    this.introMenu = document.getElementsByClassName('intro')[0];
    this.mainMenu = document.getElementsByClassName('menu')[0];
    this.finishMenu = document.getElementsByClassName('finish')[0];
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
      case 'finishMenu':
        this.finishMenu.style.display = 'block';
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
      case 'finishMenu':
        this.finishMenu.style.display = 'none';
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
      .hide('finishMenu')
      .show('menuWrapper')
      .show('introMenu');
  }

  showMain() {
    this.hide('introMenu')
      .hide('finishMenu')
      .hide('cardBackSelect')
      .hide('difficultySelect')
      .show('menuWrapper')
      .show('mainMenu')
      .show('ratingTable');
  }

  showFinish() {
    this.hide('introMenu')
      .hide('mainMenu')
      .show('menuWrapper')
      .show('finishMenu');
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
