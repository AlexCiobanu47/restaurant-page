function createMenuItem(name, ingredients){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemIngredients = document.createElement('p');
    itemIngredients.textContent = ingredients;
    
    const itemImage = document.createElement('img');
    itemImage.classList.add('menu-item-image');
    itemImage.src = `images/${name.toLowerCase()}.png`;
    itemImage.alt = `${name.toLowerCase()}`;

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemIngredients);

    return menuItem;
}

function createMenu(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    
    menuDiv.appendChild(
        createMenuItem('Bascaiola',
        'Tomato sauce, Mozzarella, Olives, Chili pepper, Feta cheese')
    );
    menuDiv.appendChild(
        createMenuItem('Salsiccia', 
        'Tomato sauce, Mozzarella, Chorizo, Garlic, Basil')
    );
    menuDiv.appendChild(
        createMenuItem('Toscana',
        'Tomato sauce, Mozzarella, Bacon, Tomatoes, Cheese')
    );
    menuDiv.appendChild(
        createMenuItem('Capriciosa',
        'Tomato sauce, Mozzarella, Feta cheese, Tomatoes, Chili pepper, Onions')
    );
    
    return menuDiv;
}
function loadMenu(){
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;