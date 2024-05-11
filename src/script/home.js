export default function() {
    const container = document.querySelector('.content');
    container.className = '';
    container.classList.add('content', 'menu');

    const dishImg = document.createElement('img');
    dishImg = Image();
    container.appendChild(dishImg);

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Nordic Ways';
    container.appendChild(restaurantName);

    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = 'The most accurately deliciousness from the Northern Lands.\nDefinitely a real restaurant.';
    container.appendChild(restaurantDescription);

    return container;
};
