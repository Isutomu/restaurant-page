import './style/reset.css';
import './style/common.css'
import './style/home.css';
import './style/menu.css';
import './style/contact.css';

import home from './script/home';
import menu from './script/menu';
import contact from './script/contact';

import homeImgUrl from './assets/home.svg'
import menuImgUrl from './assets/menu.svg'
import contactImgUrl from './assets/contact.svg'


const content = document.querySelector('.content');
content.appendChild(home());

document.querySelector('.nav-home > img').src = homeImgUrl;
document.querySelector('.nav-home').onclick = () => {
    content.innerHTML = '';
    content.appendChild(home());
};

document.querySelector('.nav-menu > img').src = menuImgUrl;
document.querySelector('.nav-menu').onclick = () => {
    content.innerHTML = '';
    content.appendChild(menu());
};

document.querySelector('.nav-contact > img').src = contactImgUrl;
document.querySelector('.nav-contact').onclick = () => {
    content.innerHTML = '';
    content.appendChild(contact());
};