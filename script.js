// JS for Vegas
const food = document.querySelector('.food');
const dialog = document.querySelector('dialog');

let stores = [
    {name: "mango mango", image: "https://tinyurl.com/29yfg3aq", menu: "https://www.instagram.com/mangomango.lasvegas/"},
    {name: "zippy's", image: "http://tinyurl.com/23de4unp", menu: "https://www.instagram.com/zippys/"},
    {name: "ton shou", image: "http://tinyurl.com/22zob9hv", menu: "https://www.instagram.com/tonshoulv/"},
    {name: "purple potato", image: "http://tinyurl.com/242lhv4y", menu: "https://www.instagram.com/purplepotatolv/"}

]
//objects use for...in vs arrays who use for...of

let tile;
for (let store of stores) {
    //create tiles
    tile = document.createElement('div');
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

let tiles = document.querySelectorAll('.tile')

food.addEventListener('click', () => {
    dialog.showModal()
})

const close = document.querySelector('.close')

close.addEventListener('click', () => {
    dialog.close();
})

const heart = document.querySelector(".heart");
heart.addEventListener('click', () => {
    heart.innerHTML = (heart.classList.toggle('clicked')) ? '<img src ="./images/heart_filled.png">' : '<img src ="./images/heart_empty.png">';
});