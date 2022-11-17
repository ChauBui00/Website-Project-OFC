// JavaScript Code

// HTML Variables
let q1_1SpanEl = document.getElementById("response_q1.1");
let q1_1InputEl = document.getElementById("q1.1");
let q1_2InputEl = document.getElementById("q1.2");
let q1_3InputEl = document.getElementById("q1.3");


document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    let q1_1Ans = q1_1InputEl.value.toLowerCase();
    let q1_2Ans = q1_2InputEl.value.toLowerCase();
    let q1_3Ans = q1_3InputEl.value.toLowerCase();

    if (q1_1Ans === "cool") {
        q1_1SpanEl.style.color = "green";
        q1_1SpanEl.innerHTML = "Correct";
        q1_1SpanEl.style.fontSize = "18.5px";
        q1_1InputEl.style.border = "3px solid green";
    } else {
        q1_1SpanEl.innerHTML = "Incorrect";
        q1_1SpanEl.style.color = "red";
        q1_1InputEl.style.border = "3px solid red";
    }
     
    
    if (q1_2Ans === "warm") {
        q1_SpanEl.style.color = "green";
        q1_SpanEl.innerHTML = "Correct";
        q1_1SpanEl.style.fontSize = "18.5px";
        q1_1InputEl.style.border = "3px solid green";
    } else {
        q1_1SpanEl.innerHTML = "Incorrect";
        q1_1SpanEl.style.color = "red";
        q1_1InputEl.style.border = "3px solid red";
    }
}