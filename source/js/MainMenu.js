export default class MainMenu {
  constructor(config, callback, ctx) {
    this.config = config;
    this.callback = callback;
    this.ctx = ctx;

    this.cardBackSelect = document.getElementsByClassName('card-back')[0];

    this.buttonNewGame = document.getElementById('main-newgame');
    this.buttonCardBack = document.getElementById('main-cardback');
    this.buttonDifficulty = document.getElementById('main-difficulty');

    this.buttonEasy = document.getElementById('easy');
    this.buttonAverage = document.getElementById('average');
    this.buttonHard = document.getElementById('hard');

    this.setButtonNewGameAction();
    this.setButtonChangeCardBackAction();
    this.setButtonChangeDifficultyAction();
    this.setDifficultyButtonsAction();
    this.setCardBackItems();
  }

  setButtonNewGameAction() {
    this.buttonNewGame.addEventListener('mouseup', () => {
      this.callback(this.ctx, 'newGame');
      this.buttonCardBack.classList.remove('active');
      this.buttonDifficulty.classList.remove('active');
    })
  }

  setButtonChangeCardBackAction() {
    this.buttonCardBack.addEventListener('mouseup', () => {
      if (this.buttonCardBack.classList.contains('active')) {
        this.buttonCardBack.classList.remove('active');

        this.callback(this.ctx, 'ratingTable');
      } else {
        this.buttonDifficulty.classList.remove('active');
        this.buttonCardBack.classList.add('active');

        this.callback(this.ctx, 'cardBackSelect');
      }
    })
  }

  setButtonChangeDifficultyAction() {
    this.buttonDifficulty.addEventListener('mouseup', () => {
      if (this.buttonDifficulty.classList.contains('active')) {
        this.buttonDifficulty.classList.remove('active');

        this.callback(this.ctx, 'ratingTable');
      } else {
        this.buttonCardBack.classList.remove('active');
        this.buttonDifficulty.classList.add('active');

        this.callback(this.ctx, 'difficultySelect');
      }
    })
  }

  setDifficultyButtonsAction() {
    switch (this.config.level) {
      case 'easy':
        this.buttonEasy.classList.add('active');
        break;
      case 'average':
        this.buttonAverage.classList.add('active');
        break;
      case 'hard':
        this.buttonHard.classList.add('active');
        break;
    }

    this.buttonEasy.addEventListener('mouseup', () => {
      this.buttonEasy.classList.add('active');
      this.buttonAverage.classList.remove('active');
      this.buttonHard.classList.remove('active');

      this.config.level = 'easy';

      this.callback(this.ctx, 'changeDifficulty');
    });

    this.buttonAverage.addEventListener('mouseup', () => {
      this.buttonAverage.classList.add('active');
      this.buttonEasy.classList.remove('active');
      this.buttonHard.classList.remove('active');

      this.config.level = 'average';

      this.callback(this.ctx, 'changeDifficulty');
    });

    this.buttonHard.addEventListener('mouseup', () => {
      this.buttonHard.classList.add('active');
      this.buttonEasy.classList.remove('active');
      this.buttonAverage.classList.remove('active');

      this.config.level = 'hard';

      this.callback(this.ctx, 'changeDifficulty');
    });
  }

  setCardBackItems() {
    const cardBackItems = [];

    for (let i = 0, l = this.config.cardBackArray.length; i < l; i++) {
      const item = document.createElement('div');
      cardBackItems.push(item);
      item.id = `${i}`;
      item.className = 'item';
      item.style.backgroundImage = `url(${this.config.cardBackArray[i]})`;
      this.cardBackSelect.appendChild(item);
    }

    cardBackItems[this.config.cardBack].classList.add('selected');

    for (let i = 0; i < cardBackItems.length; i++) {
      cardBackItems[i].addEventListener('click', () => {
        for (let j = 0; j < cardBackItems.length; j++) {
          cardBackItems[j].classList.remove('selected');
        }

        cardBackItems[i].classList.add('selected');
        this.config.cardBack = i;

        this.callback(this.ctx, 'changeCardBack');
      })
    }
  }
}