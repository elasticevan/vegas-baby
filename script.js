// JS for Vegas
const content = document.querySelector('.content');
const food = document.querySelector('.food');

const grub = document.querySelector('.grubhub');
const mapView = document.querySelector('.mapview');
const fullMap = document.querySelector('.fullMap');

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
    //vegas
    {city: "vegas", name: "dunkin", image: "./images/sadfleck (1).jpg", insta: "https://tinyurl.com/2yynshzg", location: "https://tinyurl.com/yk7u5eo5"},
    {city: "vegas", name: "raising canes", image: "./images/chicken.webp", insta: "https://tinyurl.com/23fmbwot", location: "https://tinyurl.com/2xqmxwl3"},
    {city: "vegas", name: "sbarro", image: "./images/turtlepower.png", insta: "https://tinyurl.com/22chcba8", location: "https://tinyurl.com/237e8dha"},
    {city: "vegas", name: "empanada factory", image: "https://tinyurl.com/2a69st3j", insta: "https://www.instagram.com/empanada.factorylv/?hl=en", location: "https://tinyurl.com/24hlko2g"},
    {city: "vegas", name: "mango mango", image: "https://tinyurl.com/2yyxgp32", insta: "https://www.instagram.com/mangomango.lasvegas/", location: "http://tinyurl.com/2xwwaq48"},
    {city: "vegas", name: "zippy's", image: "http://tinyurl.com/23de4unp", insta: "https://www.instagram.com/zippys/", location: "http://tinyurl.com/25e39aof"}, 
    {city: "vegas", name: "ton shou", image: "https://tinyurl.com/23o6vtkv", insta: "https://www.instagram.com/tonshoulv/", location: "https://tinyurl.com/22sfv2p9"},
    {city: "vegas", name: "purple potato", image: "http://tinyurl.com/242lhv4y", insta: "https://www.instagram.com/purplepotatolv/", location: "https://tinyurl.com/26249kep"},
    {city: "vegas", name: "303", image: "https://tinyurl.com/263c63ku", insta: "https://www.instagram.com/303inthecut/?hl=en", location: "https://tinyurl.com/2xpa6b2q"},
    {city: "vegas", name: "yo mochi", image: "https://tinyurl.com/2897tu2r", insta: "https://www.instagram.com/yomochiusa/?hl=en", location: "https://tinyurl.com/26gz9vpv"},
    {city: "vegas", name: "pappa roti", image: "https://tinyurl.com/28l8faku", insta: "https://www.instagram.com/papparotilasvegas/", location: "https://tinyurl.com/2bx6uuut"},
    {city: "vegas", name: "cheong- dam hall", image: "https://tinyurl.com/29j2ghxh", insta: "https://www.instagram.com/cheongdamfoodhall/?hl=en", location: "https://tinyurl.com/245dtflh"},
    {city: "vegas", name: "all' antico vinaio", image: "https://tinyurl.com/22nt93qk", insta: "https://www.instagram.com/allanticovinaiolv/", location: "https://tinyurl.com/2yzrj34w"},
    {city: "vegas", name: "taste budz creole", image: "https://tinyurl.com/25zoqz4h", insta: "https://www.instagram.com/tastebudzlv/", location: "https://tinyurl.com/22gzet6r"},
    {city: "vegas", name: "fukuya market", image: "https://tinyurl.com/25cfxmdd", insta: "https://www.instagram.com/fukuyalasvegas/", location: "https://tinyurl.com/2av6pje7"},
    {city: "vegas", name: "kushi bbq", image: "https://tinyurl.com/2439or67", insta: "https://www.instagram.com/kushibbq/?hl=en", location: "https://tinyurl.com/2a678v3f"},
    {city: "vegas", name: "farm basket", image: "https://tinyurl.com/27de2z2o", insta: "https://www.instagram.com/farmbasketlv/", location: "https://tinyurl.com/26am493q"},
    {city: "vegas", name: "matiki island", image: "https://tinyurl.com/28wjfqgs", insta: "https://www.instagram.com/matikiislandbbq/?hl=en", location: "https://tinyurl.com/24s5l4g2"},
    {city: "vegas", name: "ole churros", image: "https://tinyurl.com/2y7xnu5e", insta: "https://www.instagram.com/olechurroslv/", location: "https://tinyurl.com/2yhscgx6"},
    {city: "vegas", name: "sorry not sorry", image: "https://tinyurl.com/24mb6an4", insta: "https://www.instagram.com/sorrynotsorrycreamery/", location: "https://tinyurl.com/2dq3ktrq"},
    {city: "vegas", name: "morning news", image: "https://tinyurl.com/2yw32fp2", insta: "https://www.instagram.com/morningnews.lv/?hl=en", location: "https://tinyurl.com/2a44wydg"},
    {city: "vegas", name: "yomie catch u", image: "https://tinyurl.com/2ydqkcbt", insta: "https://www.instagram.com/yomie_catch_u/", location: "https://tinyurl.com/26a33y3m"},
    {city: "vegas", name: "pink duck", image: "https://tinyurl.com/29mzsfg4", insta: "https://www.instagram.com/pinkduckkitchen/?hl=en/", location: "https://tinyurl.com/23rtm7h7"},
    {city: "vegas", name: "cafe 86", image: "https://tinyurl.com/29cacn3b", insta: "https://www.instagram.com/cafe86_lasvegas/", location: "https://tinyurl.com/25ryzvhd"},
    {city: "vegas", name: "gabbi coffee", image: "https://tinyurl.com/2c26tj84", insta: "https://www.instagram.com/gabicoffeebakery/", location: "https://tinyurl.com/24tjse99"},
    {city: "vegas", name: "arte museum", image: "https://tinyurl.com/2bmky8rn", insta: "https://www.instagram.com/artemuseum_lasvegas/", location: "https://tinyurl.com/24ejypgy"},
    {city: "vegas", name: "mama pam thai", image: "https://tinyurl.com/24tt9rxe", insta: "https://www.instagram.com/mamapamlv/", location: "https://tinyurl.com/2cmakqvn"},
    {city: "vegas", name: "starbread bakery", image: "https://tinyurl.com/2c72a4mn", insta: "https://www.instagram.com/starbread_lasvegas/?hl=en", location: "https://tinyurl.com/2awcm2s6"},
    {city: "vegas", name: "palette dim sum", image: "https://tinyurl.com/22r4j9yz", insta: "https://www.instagram.com/palettetealounge/", location: "https://tinyurl.com/2yqp3zlz"},
    {city: "vegas", name: "sundry food hall", image: "https://tinyurl.com/2ytol3zg", insta: "https://www.instagram.com/thesundrylv/?hl=en", location: "https://tinyurl.com/28zxlqhm"},
    {city: "vegas", name: "lamalii thai", image: "https://tinyurl.com/2yu8lpwr", insta: "https://www.instagram.com/lamaiilv/", location: "https://tinyurl.com/27med5e5"},
    {city: "vegas", name: "calabash african kitchen", image: "https://tinyurl.com/2xkrt3yw", insta: "https://www.instagram.com/calabashafricankitchen/", location: "https://tinyurl.com/269pvs49"},
    {city: "vegas", name: "solamente pizza", image: "https://tinyurl.com/23ehv942", insta: "https://www.instagram.com/solamentepizzalv/", location: "https://tinyurl.com/23grzxb5"},
    {city: "vegas", name: "chill haus", image: "https://tinyurl.com/2cpz6nyr", insta: "https://www.instagram.com/chillhaus_lasvegas/?hl=en", location: "https://tinyurl.com/2733sq2b"},
    {city: "vegas", name: "partage", image: "https://tinyurl.com/22neybuv", insta: "https://www.instagram.com/partagelv/?hl=en", location: "https://tinyurl.com/28v8qm98"},
    {city: "vegas", name: "cafe laon (croffle)", image: "https://tinyurl.com/2xhwfdzh", insta: "https://www.instagram.com/cafelaonlv/", location: "https://tinyurl.com/232qhmbv"},
    {city: "vegas", name: "what's crepe", image: "https://tinyurl.com/23cvuam4", insta: "https://www.instagram.com/whats_crepe/?hl=en", location: "https://tinyurl.com/2cecrb9r"},
    {city: "vegas", name: "un poko crazy", image: "https://tinyurl.com/26d5rqgj", insta: "https://www.instagram.com/unpokokrazy/", location: "https://tinyurl.com/2xwyrdv8"},
    {city: "vegas", name: "hui lao shan", image: "https://tinyurl.com/2brnm3yp", insta: "https://www.instagram.com/huilaushanlv/?hl=en", location: "https://tinyurl.com/23kcvand"},
    {city: "vegas", name: "tora katsu", image: "https://tinyurl.com/24r9nua9", insta: "https://www.instagram.com/torakatsulv/", location: "https://tinyurl.com/22tmt7k3"},
    //chicago
    {city: "chicago", name: "the bear", image: "https://tinyurl.com/2c9ba2bh", insta: "https://tinyurl.com/qekphz", location: "https://tinyurl.com/238cn6jy"},
]
stores.forEach(store => store.favorite = 'no');
stores.sort((a, b) => a.name.localeCompare(b.name));

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

let tile;
//objects use for...in vs arrays who use for...of
function createTiles() {
    for (let store of stores) {
        // Create tile
        let tile = document.createElement('div');
        tile.classList.add('tile');
        if(store.favorite === 'yes') {
            tile.classList.add('clicked');
        }
        tile.textContent = store.city;

        // Create image element
        let img = document.createElement('img');
        img.src = store.image;
        tile.appendChild(img);

        // Create text span
        let text = document.createElement('span');
        text.classList.add('text');
        text.textContent = store.name;
        tile.appendChild(text);

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
                tile.classList.remove('clicked');
                store.favorite = '';
            } else {
                heart.innerHTML = heartFull;
                tile.classList.add('clicked');
                store.favorite = 'yes';
            }
        }
        
        function saveData(){
            localStorage.setItem('fave', JSON.stringify(stores));
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
            content.style.filter = 'blur(3px)';
            // Event listener for insta link
            insta.addEventListener('click', instagram);
            // Event listener for toggling like feature
            heart.addEventListener('click', likeHeart);

            
            // Event listener for closing dialog
            close.addEventListener('click', () => {
                insta.removeEventListener('click', instagram);
                heart.removeEventListener('click', likeHeart);
                content.style.filter = '';
                saveData();
                dialog.close();
            });
        })
    }
    // everytime heart is clicked, adds 'clicked' to classList of tile element. save tile
    // everytime page refreshes, run through all the tiles and add 'clicked' to tiles previously with 'clicked' in their classList 
    
}

let storeObj= localStorage.getItem('fave');
        
// Deserialize the object from the JSON string
let newObj = JSON.parse(storeObj);
function storesData() {
    let obj = (newObj === null) ? stores : newObj;
    return obj;
}

stores = storesData();
console.log(stores)
createTiles();


// Get all the tiles
const tiles = Array.from(document.querySelectorAll('.tile'));

const storeNames = document.querySelectorAll('.text');
const tileImg = document.querySelectorAll('.tile img');
const grid = document.querySelector('.grid');
const gridImg = document.querySelector('.grid img');

grid.addEventListener('click', () => {
    if (grid.classList.contains('clicked')) {
        grid.classList.remove('clicked');
        gridImg.classList.remove('clicked');
        gridImg.src = './images/grid.png';
        food.style.gap = '10px';
        food.style.padding = '2em';
        tiles.forEach(tile => {tile.classList.remove('gridView')});
        storeNames.forEach(text => {text.style.fontSize = '3em'});
        tileImg.forEach(img => {img.style.width = ''});
    } else {
        grid.classList.add('clicked');
        gridImg.classList.add('clicked');
        food.style.gap = '5px';
        food.style.padding = '1em';
        tiles.forEach(tile => {tile.classList.add('gridView')});
        storeNames.forEach(text => {text.style.fontSize = '1.5em'});
        tileImg.forEach(img => {img.style.width = '20em'});
    }
})

function sortItems(criteria) {
    tiles.forEach(tile => {tile.style.display = ''})
    if(criteria === 'Name'){
        // Sort the tiles based on their name
        stores.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'Random'){
        const randomIndex = Math.floor(Math.random() * stores.length);
        // Loop through tiles
        tiles.forEach((tile, index) => {
            if (index !== randomIndex) {
                // Remove all tiles except the one at the randomly chosen index
                tile.style.display = 'none';
            }
        });
    } else if (criteria === "Faves") {
        tiles.forEach(tile => {
            if(!tile.classList.contains('clicked')) {
                tile.style.display = 'none'
            }
        })
    }
}

const input = document.querySelector('input');

input.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase(); // Convert input value to lowercase for case-insensitive comparison
    tiles.forEach(tile => {
        const textContent = tile.querySelector('.text').textContent.toLowerCase(); // Get text content of tile
        if (!textContent.includes(inputValue)) {
            tile.style.display = 'none'; // Hide tile if it does not contain input value
        } else {
            tile.style.display = ''; // Show tile if it contains input value
        }
    });
});

const vegas = document.querySelector('.vegas');
const chicago = document.querySelector('.chicago');

vegas.addEventListener('click', () => {
    vegas.classList.add('clicked');
    chicago.classList.remove('clicked');
    tiles.forEach(tile => {
        tile.style.display = (tile.textContent.includes('vegas')) ? '' : 'none';
       
    })
})
chicago.addEventListener('click', () => {
    chicago.classList.add('clicked')
    vegas.classList.remove('clicked');
    tiles.forEach(tile => {
        tile.style.display = (tile.textContent.includes('chicago')) ? '' : 'none';
       
    })
})

/*
//array tests
const test = document.querySelector('.test');
const array = ['debut', 'fearless', 'speak now', 'red', '1989', 'reputation', 'lover'];

function display(){
    for(let key of array) {
        let cube = document.createElement('div');
        cube.classList = 'album';
        cube.textContent = key;
        test.appendChild(cube);
        
        //The bind() method is used to bind the key value to the selectedElement function. 
        //This ensures that the key value is passed as an argument to the selectedElement function when the event is triggered.
        cube.addEventListener('click', selectedElement.bind(null, key));
    }
}

display();

function selectedElement(key) {
    //get index of selected element
    let choice = array.indexOf(key);
    console.log(choice);
    //remove selected element from array
    let selected = array.splice(choice, 1);
    console.log(selected);
    //add selected element to front of array, shift rest of array +1
    array.unshift(`${selected}`);
    console.log(array);
    //clear test content to replace with updated array
    test.innerHTML = '';
    display();

}
*/

//object tests
let pokemon = [
    {name: 'squirtle', type: 'water'},
    {name: 'bulbasaur', type: 'leaf'},
    {name: 'pikachu', type: 'electric'},
    {name: 'charmander', type: 'fire'}
]


for (let mon of pokemon) {
    mon.level = "Level 5";
}

