// JS for Vegas
const food = document.querySelector('.food');

let stores = [
    {name: "mango mango", image: "https://tinyurl.com/29yfg3aq", insta: "https://www.instagram.com/mangomango.lasvegas/", location: "http://tinyurl.com/2xwwaq48"},
    {name: "zippy's", image: "http://tinyurl.com/23de4unp", insta: "https://www.instagram.com/zippys/", location: "http://tinyurl.com/25e39aof"}, 
    {name: "ton shou", image: "http://tinyurl.com/22zob9hv", insta: "https://www.instagram.com/tonshoulv/"},
    {name: "purple potato", image: "http://tinyurl.com/242lhv4y", insta: "https://www.instagram.com/purplepotatolv/"}
]

// Create modal outside of loop
let dialog = document.createElement('dialog');
let maps = document.createElement('iframe');
let socials = document.createElement('div');
let heart = document.createElement('div');
let insta = document.createElement('div');
let close = document.createElement('div');

maps.classList.add('map');
socials.classList.add('bottom');
heart.classList.add('heart');
insta.classList.add('insta');
close.classList.add('close');
heart.innerHTML = '<img src="./images/heart_empty.png">';
insta.innerHTML = '<img src="./images/insta.png">';
close.innerHTML = '<img src="./images/close_icon.png">';

socials.appendChild(heart);
socials.appendChild(insta);
socials.appendChild(close);

dialog.appendChild(maps);
dialog.appendChild(socials);

food.appendChild(dialog);

// Event listener for closing dialog
close.addEventListener('click', () => {
    dialog.close();
});
let like;
//objects use for...in vs arrays who use for...of
for (let store of stores) {
    // Create tile
    let tile = document.createElement('div');
    tile.classList.add('tile');

    // Create image element
    let img = document.createElement('img');
    img.src = store.image;
    tile.appendChild(img);

    // Create text span
    let text = document.createElement('span');
    text.classList.add('text');
    text.textContent = store.name;
    tile.appendChild(text);

    // Create like icon
    like = document.createElement('span');
    like.classList.add('heart');
    tile.appendChild(like);

    // Append tile to food container
    food.appendChild(tile);

    
    // Event listener for opening dialog on tile click
    tile.addEventListener('click', () => {
        maps.src = store.location;
        food.appendChild(dialog);
        dialog.showModal();
        insta.addEventListener('click', () => {
            window.open(store.insta, '_blank')
        });
    });
    
}

// Event listener for toggling like feature
heart.addEventListener('click', () => {
    if(heart.classList.toggle('clicked')) {
        heart.innerHTML ='<img src ="./images/heart_filled.png">';
        like.innerHTML ='<img src ="./images/heart_filled.png">'
    } else {
        heart.innerHTML ='<img src ="./images/heart_empty.png">'
        like.innerHTML = '';
}})

function saveData(){
    localStorage.setItem("liked", heart.innerHTML);
}