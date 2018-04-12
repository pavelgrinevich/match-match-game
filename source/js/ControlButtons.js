export default class ControlButtons {
  constructor(config, callbackControl) {
    this.config = config;
    this.callbackControl = callbackControl;
    this.cardBackDivItems = [];

    this.menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
    this.menuСardBack = document.getElementsByClassName('card-back')[0];
    this.menuDifficulty = document.getElementsByClassName('difficulty')[0];

    this.buttonNewGame = document.getElementById('button-newgame');
    this.buttonCardBack = document.getElementById('button-cardback');
    this.buttonDifficulty = document.getElementById('button-difficulty');
    this.buttonLeaveGame = document.getElementById('leave-game');
    this.buttonRestart = document.getElementById('restart');

    this.setFirstSetting();
    this.setDifficultyButtonsAction();
    this.setButtonsAction();
  }

  setFirstSetting() {
    this.menuWrapper.style.display = 'block';
    this.menuСardBack.style.display = 'none';
    this.menuDifficulty.style.display = 'none';

    for (let i = 0, l = this.config.cardBackArray.length; i < l; i++) {
      const item = document.createElement('div');
      this.cardBackDivItems.push(item);
      item.id = `${i}`;
      item.className = 'item';
      item.style.backgroundImage = `url(${this.config.cardBackArray[i]})`;
      this.menuСardBack.appendChild(item);
    }

    this.cardBackDivItems[this.config.cardBack].className += ' selected';

    for (let i = 0; i < this.cardBackDivItems.length; i++) {
      this.cardBackDivItems[i].addEventListener('click', () => {
        for (let j = 0; j < this.cardBackDivItems.length; j++) {
          this.cardBackDivItems[j].classList.remove('selected');
        }

        this.cardBackDivItems[i].className += ' selected';
        this.callbackControl('changeCardBack', this.cardBackDivItems[i].id);
      })
    }
  }

  setDifficultyButtonsAction() {
    const difficultyButtons = this.menuDifficulty.childNodes;

    for (let i = 0; i < difficultyButtons.length; i++) {
      if (this.config.level === difficultyButtons[i].id) difficultyButtons[i].classList.add('active');

      difficultyButtons[i].addEventListener('mouseup', () => {
        for (let j = 0; j < difficultyButtons.length; j++) {
          difficultyButtons[j].classList.remove('active');
        }

        difficultyButtons[i].classList.add('active');

        this.callbackControl('changeDifficulty', difficultyButtons[i].id);
      })
    }
  }

  setButtonsAction() {
    this.buttonCardBack.addEventListener('mouseup', () => {
      this.buttonCardBack.classList.toggle('active');
      this.buttonDifficulty.classList.remove('active');

      if (this.menuСardBack.style.display === 'none') {
        this.menuDifficulty.style.display = 'none';
        this.menuСardBack.style.display = 'block';
      } else this.menuСardBack.style.display = 'none';
    })

    this.buttonDifficulty.addEventListener('mouseup', () => {
      this.buttonDifficulty.classList.toggle('active');
      this.buttonCardBack.classList.remove('active');

      if (this.menuDifficulty.style.display === 'none') {
        this.menuСardBack.style.display = 'none';
        this.menuDifficulty.style.display = 'block';
      } else this.menuDifficulty.style.display = 'none';
    })

    this.buttonNewGame.addEventListener('mouseup', () => {
      this.menuWrapper.style.display = 'none';
      this.callbackControl('newGame');
    })

    this.buttonLeaveGame.addEventListener('mouseup', () => {
      this.menuWrapper.style.display = 'block';
      this.buttonNewGame.innerHTML = 'Try again';
      this.menuСardBack.style.display = 'none';
      this.menuDifficulty.style.display = 'none';
      this.callbackControl('leaveGame');
    })

    this.buttonRestart.addEventListener('mouseup', () => {
      this.callbackControl('restart');
    })
  }
}
