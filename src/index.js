import './style/reset.css';
import './style/common.css'
import './style/css-home.css';
import './style/css-menu.css';
import './style/css-contact.css';

import home from './script/home';
import menu from './script/menu';
import contact from './script/contact';


const content = document.querySelector('.content');
document.onload(content.appendChild(home()));

const homeBtn = document.querySelector('.home-btn');
homeBtn.onclick = () => {
    content.innerHTML = '';
    content.appendChild(home());
};

const menuBtn = document.querySelector('.menu-btn');
menuBtn.onclick = () => {
    content.innerHTML = '';
    content.appendChild(menu());
};

const contactBtn = document.querySelector('.contact-btn');
contactBtn.onclick = () => {
    content.innerHTML = '';
    content.appendChild(contact());
};