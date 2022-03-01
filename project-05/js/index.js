//Globals
let div = null;

const body = document.getElementById("totalBody");

const btn = document.getElementById("btn");

const copyBtn = document.getElementById("copy-btn");

const input = document.getElementById("input");

btn.addEventListener("click", function(){
    input.value = randomNumber();
    body.style.backgroundColor = randomNumber();
})

copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(input.value)
    if (div !== null) {
        div.remove();
        div = null;
    }
    generateToastMessage(`${input.value} copied`)
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

// step-3 collect all necessary references

// step-4 handle the change button click event

// step-5 handle the copy button click event

// step-6 activate toast message

// step-7 create a dynamic toast message

// step-8 clear toast message