import contactData from '../assets/contact.json';

function createContactCard(contactInfo) {
    const card = document.createElement('div');
    card.classList.add('contact-card');

    const nameElem = document.createElement('h2');
    nameElem.textContent = contactInfo.name;
    card.appendChild(nameElem);

    const descElem = document.createElement('span');
    descElem.textContent = contactInfo.description;
    card.appendChild(descElem);

    return card;
};

export default function () {
    const container = document.createElement('.container');
    container.classList.add('contact');

    contactData.map(contactInfo => {
        container.appendChild(createContactCard(contactInfo))
    });

    return container;
};