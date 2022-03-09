//Globals
let div = null;

const body = document.getElementById("totalBody");

const btn = document.getElementById("btn");

const copyBtn = document.getElementById("copy-btn");

const input = document.getElementById("input");

const error = document.getElementById("error");

input.addEventListener("keyup", function(e) {
    const color = e.target.value;
    input.value = color.toUpperCase();
    if (color && isValidHex(color)) {
        error.innerHTML = "";
        body.style.backgroundColor = `#${color}`;
    }
    else{
        error.innerText = "Please provide a valid color";
    }
})

btn.addEventListener("click", function(){
    body.style.backgroundColor = randomNumber();
    input.value = randomNumber().substring(1).toUpperCase();
})

copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(`#${input.value}`)
    if (div !== null) {
        div.remove();
        div = null;
    }
    if (isValidHex(input.value)) {
        generateToastMessage(`#${input.value} copied`);
    }
    else{
        alert("Invalid Color Code");
    }
})

function randomNumber(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessage(msg){
    div = document.createElement("div");
    div.innerText = msg
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