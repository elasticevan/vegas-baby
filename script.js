// JS for Vegas
const food = document.querySelector('.food');

let stores = [
    {name: "mango mango", image: "https://tinyurl.com/29yfg3aq", insta: "https://www.instagram.com/mangomango.lasvegas/", location: "http://tinyurl.com/2xwwaq48"},
    {name: "zippy's", image: "http://tinyurl.com/23de4unp", insta: "https://www.instagram.com/zippys/", location: "http://tinyurl.com/25e39aof"}, 
    {name: "ton shou", image: "http://tinyurl.com/22zob9hv", insta: "https://www.instagram.com/tonshoulv/"},
    {name: "purple potato", image: "http://tinyurl.com/242lhv4y", insta: "https://www.instagram.com/purplepotatolv/"}
]
//objects use for...in vs arrays who use for...of

let tile;
let dialog;
let maps;
let socials;
let heart;
let insta;
let close;
for (let store of stores) {
    //create tiles
    tile = document.createElement('div');
    tile.classList = "tile";
    
    // create image element and set its src attribute
    let img = document.createElement('img');
    img.src = store.image;
    tile.appendChild(img); // Append the image to the anchor

    // create text span and set its text content
    let span = document.createElement('span');
    span.classList = "text"
    span.textContent = store.name ;
    tile.appendChild(span);

    //append tile to food container
    food.appendChild(tile);
    
    //add event listener to tiles to create modal
    tile.addEventListener('click', () => {
        //create modal (popup)
        dialog = document.createElement('dialog');
        let maps = document.createElement('iframe');
        let socials = document.createElement('div');
        let heart = document.createElement('div');
        let insta = document.createElement('div');
        let close = document.createElement('div');
        maps.src = store.location;
        socials.classList = "bottom";
        heart.classList = "heart";
        insta.classList = "insta";
        close.classList = "close";
        heart.innerHTML = '<img src="./images/heart_empty.png">';
        insta.innerHTML = '<img src="./images/insta.png">';
        close.innerHTML = '<img src="./images/close_icon.png">';
        socials.appendChild(heart)
        socials.appendChild(insta)
        socials.appendChild(close)
        dialog.appendChild(maps)
        dialog.appendChild(socials);
        food.appendChild(dialog);
        dialog.showModal();
        heart.addEventListener('click', () => {
            heart.innerHTML = (heart.classList.toggle('clicked')) ? '<img src ="./images/heart_filled.png">' : '<img src ="./images/heart_empty.png">';
        });
        insta.addEventListener('click', () => {
            window.open(store.insta, '_blank')
        });
        close.addEventListener('click', () => {
            dialog.close();
        })
    })
}


function saveData(){
    localStorage.setItem("liked", heart.innerHTML);
}