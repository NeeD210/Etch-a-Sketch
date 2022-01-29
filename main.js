const container = document.querySelector('.container')
const pixel = document.createElement('div');
pixel.setAttribute('class', 'pixel');
const fragment = document.createDocumentFragment(); //Its like a temporary container that's useful for appending many elements at once
for(i=0; i<256; i++){
    let pixelClone = pixel.cloneNode(); //I use cloneNode because I can't append the same element twice
    pixelClone.style.width = `${600/16}px`
    pixelClone.style.height= `${600/16}px`
    fragment.appendChild(pixelClone);
}
container.appendChild(fragment);

function changeDisplayResolution(){
    var temp = (document.getElementById('resolution').value);
    var resolution = temp **2;
    const fragment2 = document.createDocumentFragment();
    const grid2 = document.querySelectorAll('.pixel');
    grid2.forEach(pixel => pixel.remove())
    for(i=0; i<resolution; i++){ 
        let pixelClone = pixel.cloneNode(); //I use cloneNode because I can't append the same element twice
        pixelClone.style.width = `${600/temp}px`
        pixelClone.style.height= `${600/temp}px`
        fragment2.appendChild(pixelClone);
    }
    container.appendChild(fragment2);
}

const submitDisplayResolution = document.querySelector('.submit');
submitDisplayResolution.addEventListener('click', changeDisplayResolution)


const sketchColor = document.querySelector('.sketch-color');
var color = 'black'; //default sketch color
container.addEventListener('mouseover', function (event){ //the function that makes the sketch work
    event.target.style.background = `${color}`;
});
sketchColor.addEventListener('change', function(e){ //the function that allows changes in color
    color = e.target.value;
}, false);

const startOver = document.querySelector('.start-over');
var backgroundColor = 'rgb(193, 119, 236)';
startOver.addEventListener('click', () =>{
    const grid = document.querySelectorAll('.pixel');
    grid.forEach(pixel => pixel.style.background = `${backgroundColor}`);
});

const backgroundChanger = document.querySelector('.background-color');
backgroundChanger.addEventListener('change', function(e){
    backgroundColor = e.target.value;
}, false);

const backgroundChangerButton = document.querySelector('.background-submit');
backgroundChangerButton.addEventListener('click', () =>{
    const grid = document.querySelectorAll('.pixel');
    grid.forEach(pixel => pixel.style.background = `${backgroundColor}`);
});


const surprise = document.querySelector('.surprise');
var clicks = 0;
surprise.addEventListener('click', () => {
        container.addEventListener('mouseover', function (){ //an addition that makes the colors random
            const temp = Math.floor(Math.random()*16777215).toString(16);
            color = '#' + temp;
        });
});