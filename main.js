
const btn = document.querySelector("#btn");
const select = document.getElementById("sortList");
const list = document.querySelector(".line");
const mainDiv = document.querySelector(".contaner");


btn.addEventListener("click", () => {
    console.log(select.value)
});

let max = 100;
let size = 20;
let arr = [];


// btn.addEventListener('click',()=>{

    for(let i=0; i<size; i++){
        let randomInteger = Math.floor(Math.random() *max) + 1;
        let candle = document.createElement('div');

        candle.innerText = randomInteger;
        let hello = `${randomInteger * 3}px`.toString()
        candle.style.height = hello;
        candle.classList.add('newlist');
        mainDiv.appendChild(candle);
        arr.push(randomInteger);
    }

    console.log(arr.toString());
// })
