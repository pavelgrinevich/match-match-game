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
import imgCardBack1 from './images/card-back1.jpg';
import imgCardBack2 from './images/card-back2.jpg';
import imgCardBack3 from './images/card-back3.jpg';
import imgCardBack4 from './images/card-back4.jpg';
import imgCardBack5 from './images/card-back5.jpg';

const cardsArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const cardBackArray = [imgCardBack1, imgCardBack2, imgCardBack3, imgCardBack4, imgCardBack5];
const playingField = document.getElementsByClassName('playing-field')[0];

for (let i = 0, l = cardsArray.length; i < l; i++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.style.backgroundImage = `url(${cardsArray[i]})`;
    playingField.appendChild(div);
}

for (let i = 0, l = cardsArray.length; i < l; i++) {
    const div = document.createElement('div');
    div.className = 'card back';
    let cardBack = Math.floor(Math.random() * cardBackArray.length);
    console.log(cardBack);
    div.style.backgroundImage = `url(${cardBackArray[cardBack]})`;
    playingField.appendChild(div); 
}

//menu.addEventListener('click', function() {alert('меню')});

//reload.addEventListener('click', function() {alert('релоад')});
 
/*const width = document.body.clientWidth;  
const height = document.body.clientHeight; 

const matchMatchGame = document.getElementsByClassName('match-match-game')[0];*/

/*matchMatchGame.style.width = width + 'px';
matchMatchGame.style.height = height + 'px';*/