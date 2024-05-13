import dishesData from '../assets/dishes.json';
import dishImg from '../assets/dish-menu.jpg';

function createDishCard(dishInfo) {
    const card = document.createElement('li');
    card.classList.add('dish-card');

    const img = document.createElement('img');
    // img.src = dishInfo.image;
    img.src = dishImg;
    card.appendChild(img);

    const nameElem = document.createElement('h2');
    nameElem.textContent = dishInfo.name;
    card.appendChild(nameElem);

    const descElem = document.createElement('span');
    descElem.textContent = dishInfo.description;
    card.appendChild(descElem);

    return card;
};

export default function () {
    const container = document.createElement('ul');
    container.classList.add('container', 'menu');

    dishesData.map(dishInfo => {
        container.appendChild(createDishCard(dishInfo))
    });

    return container;
};