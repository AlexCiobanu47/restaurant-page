function createContact(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');
    //phone
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contact-item');
    const phoneImage = document.createElement('img');
    phoneImage.classList.add('phone-image');
    phoneImage.src = 'images/phone.svg';
    phoneImage.alt = 'phone image';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123456789';
    phoneDiv.appendChild(phoneImage);
    phoneDiv.appendChild(phoneNumber);
    //address
    const adressDiv = document.createElement('div');
    adressDiv.classList.add('contact-item');
    const addressImage = document.createElement('img');
    addressImage.classList.add('address-image');
    addressImage.src = 'images/location.svg';
    addressImage.alt = 'address image';
    const adressText = document.createElement('p');
    adressText.textContent = 'Hollywood Boulevard 42, Los Angeles, USA';
    adressDiv.appendChild(addressImage);
    adressDiv.appendChild(adressText);
    //map
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('contact-item');
    mapDiv.classList.add('map-container');
    const mapImage = document.createElement('img');
    mapImage.classList.add('map-image');
    mapImage.src = 'images/map.png';
    mapImage.alt = 'map image';
    mapDiv.appendChild(mapImage);

    contactDiv.appendChild(phoneDiv);
    contactDiv.appendChild(adressDiv);
    contactDiv.appendChild(mapDiv);
    return contactDiv;
}

function loadContact(){
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;