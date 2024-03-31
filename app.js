let gameSeq = [];
let userSeq = [];
let highestScore = 0;
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let boxes = ["box1", "box2", "box3", "box4"];
// let heading = document.querySelector("h3");
let heading = document.createElement("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    // console.log("game started");
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function bgFlash(body) {
  body.classList.add("over");
  setTimeout(function () {
    body.classList.remove("over");
  }, 150);
}
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Leve-${level}`;
  let randomNum = Math.floor(Math.random() * 4);
  let randomBox = boxes[randomNum];
  let btn = document.querySelector(`.${randomBox}`);
  //   console.log(gameSeq);
  gameSeq.push(randomBox);
  console.log(gameSeq);
  gameFlash(btn);
}

function checkSeq(idx) {
  //   console.log("current level", level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over! your score was <b>${level}</b> </br> press any key to restart `;
    reset();
  }
}
function btnPress() {
  //   console.log(this);
  let btn = this;
  userFlash(btn);
  let userBox = btn.getAttribute("id");

  userSeq.push(userBox);
  console.log(userSeq);

  checkSeq(userSeq.length - 1);
}
let btnAll = document.querySelectorAll(".btn");
for (btn of btnAll) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  if (level > highestScore) {
    highestScore = level;
    // let heading = document.createElement("h3");
    heading.innerText = `HighestScore:${highestScore}`;
    h3.insertAdjacentElement("beforebegin", heading);
  }

  started = false;
  level = 0;
  userSeq = [];
  gameSeq = [];

  let body = document.querySelector("body");

  bgFlash(body);
}
