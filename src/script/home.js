import DishImgUrl from '../assets/dish-home.jpeg'

export default function() {
    const container = document.createElement('div');
    container.classList.add('container', 'home');

    const dishImg = document.createElement('img');
    dishImg.src = DishImgUrl;
    container.appendChild(dishImg);

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Nordic Ways';
    container.appendChild(restaurantName);

    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = 'The most accurately deliciousness from the Northern Lands.\nDefinitely a real restaurant.';
    container.appendChild(restaurantDescription);

    return container;
};
