

const minCells = 58; // 58x57 > 3333
const cellSize = 20; // gets us a good sized canvas
const canvasSize = minCells * cellSize;

const tenK = new Array(10000);
const thirds = new Array(3333);
const cellArr = new Array(minCells).fill(0);

let counter = 0;
let lastCounter = counter;

function setup() {  
  createCanvas(canvasSize, canvasSize); // 580 felt too small, doubling it.
  rectMode(CENTER).noFill().frameRate(30);
  console.log(tenK.length);

  background(0);
  

  // center cursor
  // translate(width/2, height/2);
}

function drawCell(x: number, y: number){
  const realX = (x * cellSize) + (cellSize/2);
  const realY = (y * cellSize) + (cellSize/2);
  noFill();
  stroke((Math.random() * 255));
  strokeWeight(0.25);
  circle(realX, realY, (Math.random()*(cellSize)));
  // strokeWeight(0.4);
  // stroke(map((Math.random() * 255), 0, 255, 0, 200));
  // line(realX, realY, realX + Math.random() * 200 - 500, realY + Math.random() * 200 - 100);
  // noStroke();
  // fill(Math.floor(Math.random()*255));
  rotate(counter * 0.0001);
  rect(realX, realY, cellSize, cellSize);


  noStroke();
  fill(map((Math.random() * 255), 0, 255, 269, 255));
  circle(realX, realY, (Math.random() * (cellSize/3)));
}


// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  
  if(counter !== lastCounter){
    background(0, 100);
    cellArr.forEach((_, rowNo) => {
      console.log(rowNo);
      cellArr.forEach((_, cellNo) => {
        console.log(rowNo, cellNo);
        drawCell(rowNo, cellNo);
      })
    });
  }
  
  lastCounter = counter;
  // counter++;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    lastCounter = counter;
    counter--;
  } else if (keyCode === RIGHT_ARROW) {
    lastCounter = counter;
    counter++;
  }
}