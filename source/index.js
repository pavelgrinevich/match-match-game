import './styles/style.css';
import SelectRandomCards from './js/SelectRandomCards';
import DrawGameField from './js/DrawGameField';

const config = {
  // choosing: easy, average or hard
  level: 'average',
  // choosing: from 0 to 5
  cardBack: 2,
}

const gameField = new DrawGameField(config);

/*const random = new SelectRandomCards();
random.setLevel(config.level);
const cardsArray = random.getCardsArray();


const playingField = document.getElementsByClassName('playing-field')[0];

for (let i = 0, l = cardsArray.length; i < l; i++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.style.backgroundImage = `url(${cardsArray[i]})`;
    playingField.appendChild(div);
}

import imgCardBack1 from './images/card-back1.jpg';
import imgCardBack2 from './images/card-back2.jpg';
import imgCardBack3 from './images/card-back3.jpg';
import imgCardBack4 from './images/card-back4.jpg';
import imgCardBack5 from './images/card-back5.jpg';

const cardBackArray = [imgCardBack1, imgCardBack2, imgCardBack3, imgCardBack4, imgCardBack5];
const cardBackSelect = document.getElementsByClassName('card-back')[0];

for (let i = 0, l = cardsArray.length; i < l; i++) {
    const div = document.createElement('div');
    div.className = 'card back';
    let cardBack = Math.floor(Math.random() * cardBackArray.length);
    div.style.backgroundImage = `url(${cardBackArray[cardBack]})`;
    playingField.appendChild(div); 
}

for (let i = 0, l = cardBackArray.length; i < l; i++) {
    const div = document.createElement('div');
    div.className = 'select';
    div.className += ' selected';
    div.style.backgroundImage = `url(${cardBackArray[i]})`;
    cardBackSelect.appendChild(div); 
}*/
