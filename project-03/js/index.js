const body = document.getElementById("totalBody");

const btn = document.getElementById("btn");

const copyBtn = document.getElementById("copy-btn");

const title = document.getElementById("title");

btn.addEventListener("click", function(){
    title.innerText = randomNumber();
    body.style.backgroundColor = randomNumber();
})

copyBtn.addEventListener("click", function(){
    console.log("jhgvhjvhjgtgv");
    navigator.clipboard.writeText(title.innerText)
})

function randomNumber(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}