// JS for Vegas
const food = document.querySelector('.food');
const dialog = document.querySelector('dialog');

let stores = [
    {name: "mango mango", image: "./images/mangomango.jpg", menu: "https://www.mangomangodessert.com/menu"},
    {name: "zippy's", image: "http://tinyurl.com/23de4unp", menu: "https://www.zippys.com/lasvegas/"},
    {name: "ton shou", image: "http://tinyurl.com/22zob9hv", menu: "https://www.yelp.com/biz/ton-shou-las-vegas"},
    {name: "purple potato", image: "http://tinyurl.com/242lhv4y", menu: "http://tinyurl.com/279zvzaj"}

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
heart.addEventListener('dblclick', () => {
    if(heart.classList.contains('clicked')) {
        heart.classList.remove('.clicked')
    } else {
        heart.classList.toggle('clicked');
        heart.innerHTML ='<img src ="./images/heart_filled.png">'
    }
});