
const btn = document.querySelector("#btn");
const select = document.getElementById("sortList");
const list = document.querySelector(".line");
const mainDiv = document.querySelector(".contaner");
const speedInput = document.querySelector("#range")

let max = 100;
let size = 20;
let arr = [];

for(let i= 0;i<size;i++) arr[i] = Math.floor(Math.random() *max) + 1;

for(let i=0; i<arr.length; i++){
    let candle = document.createElement('div');
    candle.innerText = arr[i];
    candle.style.height = arr[i] + "%";
    candle.classList.add('newlist');
    mainDiv.appendChild(candle);
}

let run = false;
btn.addEventListener("click", () => {
    const algorithm = select.value;
    
    if (algorithm === "bubble" && run === false) {
        bubbleSort(arr);
    }
});

let speed = 50;
speedInput.addEventListener("input", () => {
    speed = 501 - speedInput.value; // Invert value so higher = faster
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to perform Bubble Sort with animation
async function bubbleSort(arr) {
    run = true;
    const bars = document.querySelectorAll('.newlist');
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Highlight the bars being compared
            bars[j].style.backgroundColor = 'gray';
            bars[j + 1].style.backgroundColor = 'gray';
            
            bars[j].style.color = 'black';
            bars[j + 1].style.color = 'black';

            await sleep(speed); 

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            
                bars[j].style.height = arr[j] +"%";
                bars[j + 1].style.height = arr[j + 1]+ "%";
            
                // Update the bar innerText to match the swapped array values
                bars[j].innerText = arr[j];
                bars[j + 1].innerText = arr[j + 1];
            }
            // Reset colors
            bars[j].style.backgroundColor = 'skyblue';
            bars[j + 1].style.backgroundColor = 'black';
        }

        bars[n - i - 1].style.backgroundColor = 'green';
    }

    for (let bar of bars) {
        bar.style.backgroundColor = 'green';
        bar.style.color = 'white';
    }
    run = false;
}




