let result1 = document.querySelector(".result1");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let span = document.querySelector("span");
let i = 10;
function cheak() {
  let randum = Math.floor(Math.random() * 100);

  i--;

  if (input.value > randum && input.value < "100") {
    result1.innerText = "your number is high";
    console.log(randum);
    span.innerText = i;
  }
  if (input.value < randum && input.value > "1") {
    result1.innerText = "your number is low";
    console.log(randum);
    span.innerText = i;
  }

  if (input.value === randum) {
    result1.innerText = "Congratulations";
    console.log(randum);
    span.innerText = i;
  }
  if (input.value < 1) {
    result1.innerText = "Your number is invalid";
    result1.style.color = "red";
    console.log(randum);
  }
  if (i == 0 || i < 0) {
    result1.innerText = "You lose the game";
  }
}
