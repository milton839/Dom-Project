// Project requirements
// 1. Change the background color by generating random hex color by clicking a button
// 2. Also display the hex code to a disabled input field
// 3. Add a button to copy the color code
// 4. Add a toast message when copy the color code
// 5. User can type their own hex code
// 6. Show rgb color but do not need to edit it
// 7. User can copy the rgb color 

//Globals
let div = null;

const body = document.getElementById("totalBody");

const btn = document.getElementById("btn");

const copyBtn = document.getElementById("copy-btn");

const input1 = document.getElementById("input1");

const input2 = document.getElementById("input2");

const error = document.getElementById("error");

input1.addEventListener("keyup", function(e) {
    const color = e.target.value;
    input1.value = color.toUpperCase();
    if (color && isValidHex(color)) {
        error.innerHTML = "";
        body.style.backgroundColor = `#${color}`;
    }
    else{
        error.innerText = "Please provide a valid color";
    }
})

btn.addEventListener("click", function(){
    // generate random decimal number one time for rgb color and hex color
    const decimalNumber = randomDecimalNumber();

    // generate hex and rgb color by passing random red, green, blue number
    const hex = generateHexColor(decimalNumber);
    const rgb = generateRgbColor(decimalNumber);

    body.style.backgroundColor = hex;
    body.style.backgroundColor = rgb;
    input1.value = hex.substring(1).toUpperCase();
    input2.value = rgb;
})

copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(`#${input1.value}`)
    if (div !== null) {
        div.remove();
        div = null;
    }
    if (isValidHex(input1.value)) {
        generateToastMessage(`#${input1.value} copied`);
    }
    else{
        alert("Invalid Color Code");
    }
})

function randomDecimalNumber(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    return{
        red,
        green,
        blue
    }
}

function generateHexColor({red, green, blue}){
    // const {red, green, blue} = randomDecimalNumber();
    console.log(red, green, blue);
    function getTwoCode(hex){
        hex = hex.toString(16);
        return hex = hex.length == 1 ? `0${hex}` : hex;
    }

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
}

function generateRgbColor({red, green, blue}){
    // const {red, green, blue} = randomDecimalNumber();
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateToastMessage(msg){
    div = document.createElement("div");
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";

    div.addEventListener("click", function(){
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");
            div.addEventListener("animationend", function(){
                div.remove();
                div = null;
            })
    })

    document.body.appendChild(div);
}

function isValidHex(color){
    if ( color.length !== 6 ) return false;
    return /^[0-9A-Fa-f]{6}/i.test(color);
}

// step-3 collect all necessary references

// step-4 handle the change button click event

// step-5 handle the copy button click event

// step-6 activate toast message

// step-7 create a dynamic toast message

// step-8 clear toast message

// step-9 create isHexValid function

// step-10 implement change handler on input field

// step-11 prevent copying hex code if it is not valid

// step-12 Refactor the color generator function

// step-13 Update color code to display rgb colors

// step-14 Create hex to rgb function

// Update change handler

// Copy function implement for rgb