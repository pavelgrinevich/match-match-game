export default class ControlButtons {
  constructor(cardBackArray, callbackControlButtons) {
    this.callbackControlButtons = callbackControlButtons;
    this.cardBackArray = cardBackArray;
    this.cardBackDivItems = [];

    this.menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
    this.menuСardBack = document.getElementsByClassName('card-back')[0];
    this.menuDifficulty = document.getElementsByClassName('difficulty')[0];

    this.buttonNewGame = document.getElementById('button-newgame');
    this.buttonCardBack = document.getElementById('button-cardback');
    this.buttonDifficulty = document.getElementById('button-difficulty');
    this.buttonDifficultyApply = document.getElementById('button-difficulty-apply');
    this.buttonLeaveGame = document.getElementById('leave-game');
    this.buttonRestart = document.getElementById('restart');

    this.inputDifficultyArray = this.menuDifficulty.getElementsByTagName('input');

    this.setFirstSetting();
    this.setButtonsAction();
  }

  setFirstSetting() {
    this.menuWrapper.style.display = 'block';
    this.menuСardBack.style.display = 'none';
    this.menuDifficulty.style.display = 'none';

    for (let i = 0, l = this.cardBackArray.length; i < l; i++) {
      const item = document.createElement('div');
      this.cardBackDivItems.push(item);
      item.id = `${i}`;
      item.className = 'item';
      item.style.backgroundImage = `url(${this.cardBackArray[i]})`;
      this.menuСardBack.appendChild(item);
    }

    this.cardBackDivItems[2].className += ' selected';

    for (let i = 0; i < this.cardBackDivItems.length; i++) {
      this.cardBackDivItems[i].addEventListener('click', () => {
        for (let j = 0; j < this.cardBackDivItems.length; j++) {
          this.cardBackDivItems[j].classList.remove('selected');
        }

        this.cardBackDivItems[i].className += ' selected';
        this.callbackControlButtons('changeCardBack', this.cardBackDivItems[i].id);
      })
    }
  }

  setButtonsAction() {
    this.buttonCardBack.addEventListener('mouseup', () => {
      if (this.menuСardBack.style.display == 'none') {
        this.menuDifficulty.style.display = 'none';
        this.menuСardBack.style.display = 'block';
      } else this.menuСardBack.style.display = 'none';
    })

    this.buttonDifficulty.addEventListener('mouseup', () => {
      if (this.menuDifficulty.style.display == 'none') {
        this.menuСardBack.style.display = 'none';
        this.menuDifficulty.style.display = 'block';
      } else this.menuDifficulty.style.display = 'none';
    })

    this.buttonDifficultyApply.addEventListener('mouseup', () => {
      for (let i = 0; i < this.inputDifficultyArray.length; i++) {
        if (this.inputDifficultyArray[i].checked) {
          this.callbackControlButtons('changeDifficulty', this.inputDifficultyArray[i].id);
        }
      } 
    })

    this.buttonNewGame.addEventListener('mouseup', () => {
      this.menuWrapper.style.display = 'none';
      this.callbackControlButtons('newGame');
    })

    this.buttonLeaveGame.addEventListener('mouseup', () => {
      this.menuWrapper.style.display = 'block';
      this.buttonNewGame.innerHTML = 'Try again';
      this.menuСardBack.style.display = 'none';
      this.menuDifficulty.style.display = 'none';
      this.callbackControlButtons('LeaveGame');
    })

    this.buttonRestart.addEventListener('mouseup', () => {
      this.callbackControlButtons('restart');
    })
  }
}
