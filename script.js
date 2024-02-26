// JS for Vegas
const content = document.querySelector('.content');
const food = document.querySelector('.food');

const grub = document.querySelector('.grubhub');
const mapView = document.querySelector('.mapview')
const fullMap = document.querySelector('.fullMap')

function initMap() {
    // Create a new map object
    const map = new google.maps.Map(document.querySelector('.fullMap'), {
        center: {lat: 36.1466403, lng: -115.1585639}, // Center the map on a specific location
        zoom: 11 // Set the initial zoom level
    });
}

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
})



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
for (let store of stores) {
    // Create tile
    let tile = document.createElement('div');
    tile.classList.add('tile');
    let tiles = document.querySelectorAll('.tile');

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

    function saveData(data){
        localStorage.setItem("popHeart", data)
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
    for (let tile of tiles) {
        saveData(tile.classList.contains('clicked') ? 'clicked' : '')
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

    function showTask() {
        let heartState = localStorage.getItem("popHeart");
        for (let tile of tiles) {
            if(heartState === 'clicked') {
                if(tile.classList.contains(heartState)) {
                    like.innerHTML = heartFull;
                }
            } else if (heartState === null){
                like.innerHTML = '';
            }
        }
        console.log(heartState)
    }
    showTask();
}
//localStorage.removeItem("popHeart");

//can't get hearts to stay on tile upon reset.  wtf?!!?

