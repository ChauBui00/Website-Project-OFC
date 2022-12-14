// JavaScript Code

// HTML Variables

// Question#1
let q1_1SpanEl = document.getElementById("response_q1.1");
let q1_1InputEl = document.getElementById("q1.1");

let q1_2SpanEl = document.getElementById("response_q1.2");
let q1_2InputEl = document.getElementById("q1.2");

let q1_3SpanEl = document.getElementById("response_q1.3");
let q1_3InputEl = document.getElementById("q1.3");
// Question#2
let q2_1SpanEl = document.getElementById("response_q2.1");
let q2_1InputEl = document.getElementById("q2.1");

let q2_2SpanEl = document.getElementById("response_q2.2");
let q2_2InputEl = document.getElementById("q2.2");
// Question#3
let q3_1SpanEl = document.getElementById("response_q3.1");
let q3_1InputEl = document.getElementById("q3.1");

let q3_2SpanEl = document.getElementById("response_q3.2");
let q3_2InputEl = document.getElementById("q3.2");

let q3_3SpanEl = document.getElementById("response_q3.3");
let q3_3InputEl = document.getElementById("q3.3");
// Question#4
let q4_1SpanEl = document.getElementById("response_q4.1");
let q4_1InputEl = document.getElementById("q4.1");

let q4_2SpanEl = document.getElementById("response_q4.2");
let q4_2InputEl = document.getElementById("q4.2");
// Question#5
let q5_1SpanEl = document.getElementById("response_q5.1");
let q5_1InputEl = document.getElementById("q5.1");

let q5_2SpanEl = document.getElementById("response_q5.2");
let q5_2InputEl = document.getElementById("q5.2");

// Score Elements
let scoreEl_1 = document.getElementById("score.1");
let scoreEl_2 = document.getElementById("score.2");
let scoreEl_3 = document.getElementById("score.3");
let scoreEl_4 = document.getElementById("score.4");
let scoreEl_5 = document.getElementById("score.5");
let total_score = document.getElementById("total.score");
let scorepercentage = document.getElementById("score.percentage");

// Global Variables

let score_1 = 0;
let score_2 = 0;
let score_3 = 0;
let score_4 = 0;
let score_5 = 0;
let totalscore = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Lowercase Input Elements
  let q1_1Ans = q1_1InputEl.value.toLowerCase();
  let q1_2Ans = q1_2InputEl.value.toLowerCase();
  let q1_3Ans = q1_3InputEl.value.toLowerCase();

  let q2_1Ans = q2_1InputEl.value.toLowerCase();
  let q2_2Ans = q2_2InputEl.value.toLowerCase();

  let q3_1Ans = q3_1InputEl.value.toLowerCase();
  let q3_2Ans = q3_2InputEl.value.toLowerCase();
  let q3_3Ans = q3_3InputEl.value.toLowerCase();

  let q4_1Ans = q4_1InputEl.value.toLowerCase();
  let q4_2Ans = q4_2InputEl.value.toLowerCase();

  let q5_1Ans = q5_1InputEl.value.toLowerCase();
  let q5_2Ans = q5_2InputEl.value.toLowerCase();

  // If statements
  // Que#1If
  if (q1_1Ans === "cool") {
    score_1++;
    q1_1SpanEl.style.color = "green";
    q1_1SpanEl.innerHTML = "Correct";
    q1_1SpanEl.style.fontSize = "18.5px";
    q1_1InputEl.style.border = "3px solid green";
    scoreEl_1.innerHTML = score_1;
  } else {
    q1_1SpanEl.innerHTML = "Incorrect";
    q1_1SpanEl.style.color = "red";
    q1_1InputEl.style.border = "3px solid red";
  }

  if (q1_2Ans === "warm") {
    score_1++;
    q1_2SpanEl.style.color = "green";
    q1_2SpanEl.innerHTML = "Correct";
    q1_2SpanEl.style.fontSize = "18.5px";
    q1_2InputEl.style.border = "3px solid green";
    scoreEl_1.innerHTML = score_1;
  } else {
    q1_2SpanEl.innerHTML = "Incorrect";
    q1_2SpanEl.style.color = "red";
    q1_2InputEl.style.border = "3px solid red";
  }

  if (q1_3Ans === "neutral") {
    score_1++;
    q1_3SpanEl.style.color = "green";
    q1_3SpanEl.innerHTML = "Correct";
    q1_3SpanEl.style.fontSize = "18.5px";
    q1_3InputEl.style.border = "3px solid green";
    scoreEl_1.innerHTML = score_1;
  } else {
    q1_3SpanEl.innerHTML = "Incorrect";
    q1_3SpanEl.style.color = "red";
    q1_3InputEl.style.border = "3px solid red";
  }

  // Que#2If
  if (q2_1Ans === "cool") {
    score_2++;
    q2_1SpanEl.style.color = "green";
    q2_1SpanEl.innerHTML = "Correct";
    q2_1SpanEl.style.fontSize = "18.5px";
    q2_1InputEl.style.border = "3px solid green";
    scoreEl_2.innerHTML = score_2;
  } else {
    q2_1SpanEl.innerHTML = "Incorrect";
    q2_1SpanEl.style.color = "red";
    q2_1InputEl.style.border = "3px solid red";
  }

  if (q2_2Ans === "warm") {
    score_2++;
    q2_2SpanEl.style.color = "green";
    q2_2SpanEl.innerHTML = "Correct";
    q2_2SpanEl.style.fontSize = "18.5px";
    q2_2InputEl.style.border = "3px solid green";
    scoreEl_2.innerHTML = score_2;
  } else {
    q2_2SpanEl.innerHTML = "Incorrect";
    q2_2SpanEl.style.color = "red";
    q2_2InputEl.style.border = "3px solid red";
  }

  // Que#3If

  if (q3_1Ans === "warm") {
    score_3++;
    q3_1SpanEl.style.color = "green";
    q3_1SpanEl.innerHTML = "Correct";
    q3_1SpanEl.style.fontSize = "18.5px";
    q3_1InputEl.style.border = "3px solid green";
    scoreEl_3.innerHTML = score_3;
  } else {
    q3_1SpanEl.innerHTML = "Incorrect";
    q3_1SpanEl.style.color = "red";
    q3_1InputEl.style.border = "3px solid red";
  }

  if (q3_2Ans === "cool") {
    score_3++;
    q3_2SpanEl.style.color = "green";
    q3_2SpanEl.innerHTML = "Correct";
    q3_2SpanEl.style.fontSize = "18.5px";
    q3_2InputEl.style.border = "3px solid green";
    scoreEl_3.innerHTML = score_3;
  } else {
    q3_2SpanEl.innerHTML = "Incorrect";
    q3_2SpanEl.style.color = "red";
    q3_2InputEl.style.border = "3px solid red";
  }

  if (q3_3Ans === "neutral") {
    score_3++;
    q3_3SpanEl.style.color = "green";
    q3_3SpanEl.innerHTML = "Correct";
    q3_3SpanEl.style.fontSize = "18.5px";
    q3_3InputEl.style.border = "3px solid green";
    scoreEl_3.innerHTML = score_3;
  } else {
    q3_3SpanEl.innerHTML = "Incorrect";
    q3_3SpanEl.style.color = "red";
    q3_3InputEl.style.border = "3px solid red";
  }

  // Que#4If
  if (q4_1Ans === "warm") {
    score_4++;
    q4_1SpanEl.style.color = "green";
    q4_1SpanEl.innerHTML = "Correct";
    q4_1SpanEl.style.fontSize = "18.5px";
    q4_1InputEl.style.border = "3px solid green";
    scoreEl_4.innerHTML = score_4;
  } else {
    q4_1SpanEl.innerHTML = "Incorrect";
    q4_1SpanEl.style.color = "red";
    q4_1InputEl.style.border = "3px solid red";
  }

  if (q4_2Ans === "cool") {
    score_4++;
    q4_2SpanEl.style.color = "green";
    q4_2SpanEl.innerHTML = "Correct";
    q4_2SpanEl.style.fontSize = "18.5px";
    q4_2InputEl.style.border = "3px solid green";
    scoreEl_4.innerHTML = score_4;
  } else {
    q4_2SpanEl.innerHTML = "Incorrect";
    q4_2SpanEl.style.color = "red";
    q4_2InputEl.style.border = "3px solid red";
  }

  // Que#5If
  if (q5_1Ans === "cool") {
    score_5++;
    q5_1SpanEl.style.color = "green";
    q5_1SpanEl.innerHTML = "Correct";
    q5_1SpanEl.style.fontSize = "18.5px";
    q5_1InputEl.style.border = "3px solid green";
    scoreEl_5.innerHTML = score_5;
  } else {
    q5_1SpanEl.innerHTML = "Incorrect";
    q5_1SpanEl.style.color = "red";
    q5_1InputEl.style.border = "3px solid red";
  }

  if (q5_2Ans === "warm") {
    score_5++;
    q5_2SpanEl.style.color = "green";
    q5_2SpanEl.innerHTML = "Correct";
    q5_2SpanEl.style.fontSize = "18.5px";
    q5_2InputEl.style.border = "3px solid green";
    scoreEl_5.innerHTML = score_5;
  } else {
    q5_2SpanEl.innerHTML = "Incorrect";
    q5_2SpanEl.style.color = "red";
    q5_2InputEl.style.border = "3px solid red";
  }

  let scoreresult = score_1 + score_2 + score_3 + score_4 + score_5;
  let percentage = (scoreresult / 13) * 100;

  total_score.innerHTML = scoreresult;
  scorepercentage.innerHTML = percentage.toFixed(0);
}
