// JS for Vegas
const content = document.querySelector('.content');
const food = document.querySelector('.food');

const grub = document.querySelector('.grubhub');
const mapView = document.querySelector('.mapview')
const fullMap = document.querySelector('.fullMap')

grub.addEventListener('click', () => {
    fullMap.style.display = "none";
    content.style.display = "block";
    grub.style.opacity = 0.5;
    grub.style.pointerEvents = "none";
    mapView.style.opacity = 1;
    mapView.style.pointerEvents = "all";
})
mapView.addEventListener('click', e => {
    content.style.display = "none";
    fullMap.style.display = "block";
    mapView.style.opacity = 0.5;
    mapView.style.pointerEvents = "none";
    grub.style.opacity = 1;
    grub.style.pointerEvents = "all";
    window.open("https://maps.app.goo.gl/RUP2kzpdiWUZBG4JA", "_ blank")
})



let stores = [
    {name: "mango mango", image: "https://tinyurl.com/29yfg3aq", insta: "https://www.instagram.com/mangomango.lasvegas/", location: "http://tinyurl.com/2xwwaq48"},
    {name: "zippy's", image: "http://tinyurl.com/23de4unp", insta: "https://www.instagram.com/zippys/", location: "http://tinyurl.com/25e39aof"}, 
    {name: "ton shou", image: "http://tinyurl.com/22zob9hv", insta: "https://www.instagram.com/tonshoulv/", location: "https://tinyurl.com/22sfv2p9"},
    {name: "purple potato", image: "http://tinyurl.com/242lhv4y", insta: "https://www.instagram.com/purplepotatolv/", location: "https://tinyurl.com/26249kep"},
    {name: "303", image: "https://tinyurl.com/263c63ku", insta: "https://www.instagram.com/303inthecut/?hl=en", location: "https://tinyurl.com/2xpa6b2q"},
    {name: "yo mochi", image: "https://tinyurl.com/2897tu2r", insta: "https://www.instagram.com/yomochiusa/?hl=en", location: "https://tinyurl.com/2yg776sf"},
    {name: "pappa roti", image: "https://tinyurl.com/28l8faku", insta: "https://www.instagram.com/papparotilasvegas/", location: "https://tinyurl.com/2akq64dy"},
    {name: "cheong- dam hall", image: "https://tinyurl.com/29j2ghxh", insta: "https://www.instagram.com/cheongdamfoodhall/?hl=en", location: "https://tinyurl.com/274z9qpn"},
    {name: "all' antico vinaio", image: "https://tinyurl.com/22nt93qk", insta: "https://www.instagram.com/allanticovinaiolv/", location: "https://tinyurl.com/229828yz"},
    {name: "taste budz creole", image: "https://tinyurl.com/25zoqz4h", insta: "https://www.instagram.com/tastebudzlv/", location: "https://tinyurl.com/22gzet6r"},
    {name: "fukuya market", image: "https://tinyurl.com/25cfxmdd", insta: "https://www.instagram.com/fukuyalasvegas/", location: "https://tinyurl.com/2av6pje7"},
    {name: "kushi bbq", image: "https://tinyurl.com/2439or67", insta: "https://www.instagram.com/kushibbq/?hl=en", location: "https://tinyurl.com/2a678v3f"},

]

// Create modal outside of loop
let dialog = document.createElement('dialog');
let maps = document.createElement('iframe');
let socials = document.createElement('div');
let heart = document.createElement('div');
let insta = document.createElement('div');
let close = document.createElement('div');

//declare heart images
const heartEmpty ='<img src ="./images/heart_empty.png">';
const heartFull ='<img src ="./images/heart_filled.png">';

// add class to var
maps.classList.add('map');
socials.classList.add('bottom');
heart.classList.add('heart');
insta.classList.add('insta');
close.classList.add('close');

// icons
heart.innerHTML = heartEmpty;
insta.innerHTML = '<img src="./images/insta.png">';
close.innerHTML = '<img src="./images/close_icon.png">';

socials.appendChild(heart);
socials.appendChild(insta);
socials.appendChild(close);

dialog.appendChild(maps);
dialog.appendChild(socials);

food.appendChild(dialog);

//objects use for...in vs arrays who use for...of
let like;
let tile;
let tiles;
for (let store of stores) {
    // Create tile
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tiles = document.querySelectorAll('.tile');

    // Create image element
    let img = document.createElement('img');
    img.src = store.image;
    tile.appendChild(img);

    // Create text span
    text = document.createElement('span');
    text.classList.add('text');
    text.textContent = store.name;
    tile.appendChild(text);


    let heartValue = localStorage.getItem('myLikes');

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
        if(tile.classList.contains('clicked')) {
            heart.innerHTML = heartEmpty;
            like.innerHTML = '';
            tile.classList.remove('clicked');
        } else {
            heart.innerHTML = heartFull;
            like.innerHTML = heartFull;
            tile.classList.add('clicked');
        }
    }

    // Event listener for opening dialog on tile click
    tile.addEventListener('click', () => {
        if(tile.classList.contains('clicked')) {
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

}
function sortItems(criteria) {

        if(criteria === 'Name'){
            tiles.sort((a, b) => a.textContent - b.textContent)
        }

}

console.log(tiles)
//localStorage.removeItem("popHeart");

//can't get hearts to stay on tile upon reset.  wtf?!!?

