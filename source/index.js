import './styles/style.css';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import cardBack1 from './images/card-back1.jpg';
import cardBack2 from './images/card-back2.jpg';
import cardBack3 from './images/card-back3.jpg';
import cardBack4 from './images/card-back4.jpg';
import cardBack5 from './images/card-back5.jpg';

import MenuControl from './js/MenuControl';
import MainControl from './js/MainControl';
import RandomCards from './js/RandomCards';
import RatingList from './js/RatingList';
import DrawingGame from './js/DrawingGame';

const callbackControl = (flag) => {
  switch (flag) {
    case 'mainMenu':
      gameField.drawNewGameField();
      mainControl.stopGame();
      break;
    case 'finish':
      ratingList.addNewScore();
      menu.showFinish();
      break;
    case 'changeCardBack':
      gameField.setCardBack();
      break;
    case 'changeDifficulty':
      gameField.drawNewGameField();
      break;
    case 'newGame':
      gameField.drawNewGameField(randomCards.getRandomCardsArray());
      mainControl.startNewGame();
      break;
    case 'restart':
      mainControl.stopGame();
      gameField.drawNewGameField(randomCards.getRandomCardsArray());
      mainControl.startNewGame();
      break;
  }
}

const config = {
  callbackControl,
  defaultCardsArray: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
  cardBackArray: [cardBack1, cardBack2, cardBack3, cardBack4, cardBack5],
  // choosing: from 0 to 5 (number of items of cardBackArray)
  cardBack: 0,
  // choosing: easy, average or hard
  level: 'average',
  profile: [],
  ratingTable: [],
  time: '00:00:00',
  countOfSteps: 0,
  score: 0,
  place: 0,

  get numberOfCards() {
    switch (this.level) {
      case 'easy':
        return 12;
        break;
      case 'average':
        return 18;
        break;
      case 'hard':
        return 24;
        break;
    }
  },
}

const menu = new MenuControl(config);
const ratingList = new RatingList(config);
const randomCards = new RandomCards(config);
const gameField = new DrawingGame(config);
const mainControl = new MainControl(config);
