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


const heartEmpty ='<img src ="./images/heart_empty.png">';
const heartFull ='<img src ="./images/heart_filled.png">';
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
    let like = document.createElement('span');
    like.classList.add('heart');
    tile.appendChild(like);

    // Append tile to food container
    food.appendChild(tile);

    // specify which map to tile
    function instagram(){
        window.open(store.insta, '_blank')
    }
    // check if tile has been liked
    function likeHeart(){
        if(like.classList.contains('clicked')) {
            heart.innerHTML = heartEmpty;
            like.innerHTML = '';
            like.classList.remove('clicked');
        } else {
            heart.innerHTML = heartFull;
            like.innerHTML = heartFull;
            like.classList.add('clicked');
        }
        saveData();
    }

    // Event listener for opening dialog on tile click
    tile.addEventListener('click', () => {
        if(like.classList.contains('clicked')) {
            heart.innerHTML = heartFull;
        } else {
            heart.innerHTML = heartEmpty;
        };
        maps.src = store.location;
        dialog.showModal();
        // Event listener for insta link
        insta.addEventListener('click', instagram);
        // Event listener for toggling like feature
        heart.addEventListener('click', likeHeart);
        
        // Event listener for closing dialog
        close.addEventListener('click', () => {
            insta.removeEventListener('click', instagram);
            heart.removeEventListener('click', likeHeart);
            dialog.close();
        });
    });

    function saveData(){
        localStorage.setItem("popHeart", like.innerHTML)
    }
    function showTask() {
        like.innerHTML = localStorage.getItem("popHeart")
    }
    //localStorage.removeItem("popHeart");
    showTask();
}


