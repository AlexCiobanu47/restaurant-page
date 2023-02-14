import loadMenu from "./menu.js"
import loadHome from "./home.js"
import loadContact from "./contact.js"

function setActiveButton(button){
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach((button) =>{
        if(button !== this){
            button.classList.remove('active-button');
        }
    });
    button.classList.add('active-button');
}

function createNavbar(){
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    const homeButton = document.createElement('button');
    homeButton.textContent = 'HOME';
    homeButton.classList.add('nav-button');
    homeButton.setAttribute('id', 'home-button');
    homeButton.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.textContent = 'MENU';
    menuButton.classList.add('nav-button');
    menuButton.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });
    const contactButton = document.createElement('button');
    contactButton.textContent = 'CONTACT';
    contactButton.classList.add('nav-button');
    contactButton.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    });

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}
function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Papa's pizzeria";

    header.appendChild(restaurantName);
    header.appendChild(createNavbar());

    return header;
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
}
function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer')
    const copyrightText = document.createElement('p');
    copyrightText.textContent = `Copyright © ${new Date().getFullYear()} alexciobanu47`;

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/AlexCiobanu47';
    githubLink.setAttribute('target', '_blank');

    const githubImage = document.createElement('img');
    githubImage.src = 'images/github-mark-white.svg';
    githubImage.classList.add('github-image');

    githubLink.appendChild(githubImage);
    footer.appendChild(copyrightText);
    footer.appendChild(githubLink);
    
    return footer;
}
function initializeWebsite(){
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    setActiveButton(document.querySelector("#home-button"));
    loadHome();
}
export default initializeWebsite;