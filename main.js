
const btn = document.querySelector("#btn");
const select = document.getElementById("sortList");
const list = document.querySelector(".line");
const mainDiv = document.querySelector(".contaner");
const speedInput = document.querySelector("#range")

let max = 100;
let size = 20;
let arr = [];

for (let i = 0; i < size; i++) arr[i] = Math.floor(Math.random() * max) + 1;

for (let i = 0; i < arr.length; i++) {
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
        shuffle(arr);
        bubbleSort(arr);
    }

    if (algorithm === 'selection' && run == false) {
        shuffle(arr);
        selectionSort(arr);
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
const bars = document.querySelectorAll('.newlist');
async function bubbleSort(arr) {
    run = true;
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
                // swap opetation
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                // set bars height
                bars[j].style.height = arr[j] + "%";
                bars[j + 1].style.height = arr[j + 1] + "%";


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



async function selectionSort(arr) {
    run = true;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        bars[i].style.backgroundColor = 'gray';
        for (let j = i + 1; j < n; j++) {

            bars[j].style.backgroundColor = 'gray';
            await sleep(speed);

            if (arr[j] < arr[min]) {
                bars[min].style.backgroundColor = 'skyblue';
                bars[i].style.backgroundColor = 'gray';
                min = j;
                bars[min].style.backgroundColor = 'lightyellow';
            } else {
                // Reset the color of non-minimum elements
                bars[j].style.backgroundColor = 'skyblue';

            }
        }

        for(let k = i; k<n;k++){
            bars[k].style.backgroundColor = 'skyblue'
        }

        [arr[i] ,arr[min]] = [arr[min], arr[i]];

        bars[i].style.height = arr[i] + "%";
        bars[min].style.height = arr[min] + "%";

        bars[i].innerText = arr[i];
        bars[min].innerText = arr[min];

        bars[i].style.backgroundColor = 'green';

    }

    for (let bar of bars) {
        bar.style.backgroundColor = 'green';
        bar.style.color = 'white';
    }    

    run = false;
}

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
        bars[i].style.height = arr[i] + '%';
        bars[j].style.height = arr[j] + '%';

        bars[i].innerText = arr[i];
        bars[j].innerText = arr[j];

        bars[i].style.backgroundColor = 'skyblue';
        bars[i].style.color = "black";

    }
}

