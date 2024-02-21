// JS for Vegas
const food = document.querySelector('.food');

let stores = [
    {name: "mango mango", image: "./images/mangomango.jpg", menu: "https://www.mangomangodessert.com/menu"},
    {name: "zippy's", image: "http://tinyurl.com/23de4unp", menu: "https://www.zippys.com/lasvegas/"},
    {name: "ton shou", image: "http://tinyurl.com/22zob9hv", menu: "https://www.yelp.com/biz/ton-shou-las-vegas"},
    {name: "mango mango", image: "./images/mangomango.jpg", menu: "https://www.mangomangodessert.com/menu"}

]
//objects use for...in vs arrays who use for...of

let tile;
for (let store of stores) {
    //create tiles
    let tile = document.createElement('div');
    tile.classList = "tile";

    //create anchor for menu link
    let menu = document.createElement('a');
    menu.href = store.menu
    menu.target = "blank";
    tile.appendChild(menu);

    // create image element and set its src attribute
    let img = document.createElement('img');
    img.src = store.image;
    menu.appendChild(img); // Append the image to the anchor

    // create text span and set its text content
    let span = document.createElement('span');
    span.classList = "text"
    span.textContent = store.name ;
    menu.appendChild(span);

    //append tile into food element
    food.appendChild(tile);
}

