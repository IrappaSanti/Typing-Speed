let mainDiv = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoateInput = document.getElementById("quoteInput");
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let spin = document.getElementById("spinner");

let count = 0;
let timeStart = setInterval(function() {
    timer.textContent = count;
    count += 1;
}, 1000);
let op = {
    method: "GET"
};
spin.classList.remove("d-none");
fetch("https://apis.ccbp.in/random-quote", op)
    .then(function(resp) {
        return resp.text();
    })
    .then(function(stat) {
        spin.classList.add("d-none");
        quoteDisplay.textContent = JSON.parse(stat).content;
    });

submit.addEventListener("click", function() {
    if (quoateInput.value === quoteDisplay.textContent) {
        result.textContent = "You typed it in " + timer.textContent + " seconds";
        clearInterval(timeStart);
    } else {
        result.textContent = "You typed incorrect sentence";
    }
})
reset.addEventListener("click", function() {
    spin.classList.remove("d-none");
    timer.textContent = 0;
    quoteDisplay.textContent="";
    quoateInput.value="";
    result.textContent="";
    let text = "";
    count = 0;
    fetch("https://apis.ccbp.in/random-quote", op)
        .then(function(resp) {
            return resp.text();
        })
        .then(function(stat) {
            spin.classList.add("d-none");
            text = JSON.parse(stat).content;
            quoteDisplay.textContent = text;
        });
})


