const minCells = 58;
const cellSize = 20;
const canvasSize = minCells * cellSize;
const tenK = new Array(10000);
const thirds = new Array(3333);
const cellArr = new Array(minCells).fill(0);
let counter = 0;
let lastCounter = counter;
function setup() {
    createCanvas(canvasSize, canvasSize);
    rectMode(CENTER).noFill().frameRate(30);
    console.log(tenK.length);
    background(0);
}
function drawCell(x, y) {
    const realX = (x * cellSize) + (cellSize / 2);
    const realY = (y * cellSize) + (cellSize / 2);
    noFill();
    stroke((Math.random() * 255));
    strokeWeight(0.25);
    circle(realX, realY, (Math.random() * (cellSize)));
    rotate(counter * 0.0001);
    rect(realX, realY, cellSize, cellSize);
    noStroke();
    fill(map((Math.random() * 255), 0, 255, 269, 255));
    circle(realX, realY, (Math.random() * (cellSize / 3)));
}
function draw() {
    if (counter !== lastCounter) {
        background(0, 100);
        cellArr.forEach((_, rowNo) => {
            console.log(rowNo);
            cellArr.forEach((_, cellNo) => {
                console.log(rowNo, cellNo);
                drawCell(rowNo, cellNo);
            });
        });
    }
    lastCounter = counter;
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        lastCounter = counter;
        counter--;
    }
    else if (keyCode === RIGHT_ARROW) {
        lastCounter = counter;
        counter++;
    }
}
class ColorHelper {
    static getColorVector(c) {
        return createVector(red(c), green(c), blue(c));
    }
    static rainbowColorBase() {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    }
    static getColorsArray(total, baseColorArray = null) {
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(x => this.getColorVector(x));
        ;
        let colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    }
    static getColorByPercentage(firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    }
}
class PolygonHelper {
    static draw(numberOfSides, width) {
        push();
        const angle = TWO_PI / numberOfSides;
        const radius = width / 2;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = cos(a) * radius;
            let sy = sin(a) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    }
}
const minCells = 58;
const cellSize = 20;
const canvasSize = minCells * cellSize;
const tenK = new Array(10000);
const thirds = new Array(3333);
const cellArr = new Array(minCells).fill(0);
let counter = 0;
let lastCounter = counter;
function setup() {
    createCanvas(canvasSize, canvasSize);
    rectMode(CENTER).noFill().frameRate(30);
    console.log(tenK.length);
    background(0);
}
function drawCell(x, y) {
    const realX = (x * cellSize) + (cellSize / 2);
    const realY = (y * cellSize) + (cellSize / 2);
    noFill();
    stroke((Math.random() * 255));
    strokeWeight(0.25);
    circle(realX, realY, (Math.random() * (cellSize)));
    rotate(counter * 0.0001);
    rect(realX, realY, cellSize, cellSize);
    noStroke();
    fill(map((Math.random() * 255), 0, 255, 269, 255));
    circle(realX, realY, (Math.random() * (cellSize / 3)));
}
function draw() {
    if (counter !== lastCounter) {
        background(0, 100);
        cellArr.forEach((_, rowNo) => {
            console.log(rowNo);
            cellArr.forEach((_, cellNo) => {
                console.log(rowNo, cellNo);
                drawCell(rowNo, cellNo);
            });
        });
    }
    lastCounter = counter;
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        lastCounter = counter;
        counter--;
    }
    else if (keyCode === RIGHT_ARROW) {
        lastCounter = counter;
        counter++;
    }
}
//# sourceMappingURL=build.js.map