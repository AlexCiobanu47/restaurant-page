function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const chefImage = document.createElement('img');
    chefImage.classList.add('chef-image');
    chefImage.src = 'images/chef.png';
    chefImage.alt = 'chef';

    home.appendChild(createParagraph('Best pizza in the world'));
    home.appendChild(chefImage);
    home.appendChild(createParagraph('Order online or come to our locations'));
    return home;
}

function createParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome(){
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;