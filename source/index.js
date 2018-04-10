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

import SelectRandomCards from './js/SelectRandomCards';
import ControlGameField from './js/ControlGameField';
import ControlButtons from './js/ControlButtons';

const config = {
  defaultCardsArray: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
  cardBackArray: [cardBack1, cardBack2, cardBack3, cardBack4, cardBack5],
  // choosing: easy, average or hard
  level: 'average',
  // choosing: from 0 to 5
  cardBack: 2,
}

const gameField = new ControlGameField(config);
const random = new SelectRandomCards(config.defaultCardsArray);

const callbackControlButtons = (flag, arg) => {
  switch (flag) {
    case 'changeCardBack':
      gameField.setCardBack(arg);
      break;
    case 'changeDifficulty':
      config.level = arg;
      gameField.setLevel(arg);
      break;
    case 'newGame':
      random.setLevel(config.level);
      gameField.createNewGame(random.getCardsArray());
      break;
    case 'leaveGame':
      gameField.leaveGame();
      break;
    case 'restart':
      gameField.createNewGame(random.getCardsArray());
      break;
    default:
      break;
  }
}

const menu = new ControlButtons(config.cardBackArray, callbackControlButtons);
