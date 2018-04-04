import './styles/style.css';
import img from './images/1.jpg';
import './images/2.jpg';
import './images/3.jpg';
import './images/4.jpg';
import './images/5.jpg';
import './images/6.jpg';
import './images/7.jpg';
import './images/8.jpg';
import './images/9.jpg';
import './images/10.jpg';
import './images/11.jpg';
import './images/12.jpg';
import './images/card-back.jpg';

const body = document.getElementsByTagName('body')[0]
body.innerHTML = `<img src="${img}" alt="card">`;