/* eslint-disable no-undef, no-unused-vars */

let cnv, canv1, img;

let pixDensity = 2;

let widthImage = 2048;
let heightImage = 2732;

function preload() {
  img = loadImage("001.png");
}

function setup() {
  pixelDensity(pixDensity);

  // img.loadPix
  // img.loadPixels()

  cnv = createCanvas(400, 400);
  canv1 = createGraphics(800, 800);
  // Put setup code here
  // console.log(cnv);
  // console.log(canv1);
}

function draw() {
  // background("red");
  // Put drawings here
  // fill(234, 31, 81);
  // noStroke();
  // rect(50, 50, 250, 250);
  // fill(255);
  // textStyle(BOLD);
  // textSize(140);
  // text("p5*", 60, 250);
  image(img, 0, 0, 400, 400);
  drawCAN();
  image(canv1, 0, 0, 400, 400);
}

function drawCAN() {
  // canv1.background("red");
  canv1.nofill();
  canv1.rect(200, 200, 400, 400);
}

// This Redraws the Canvas when resized
// windowResized = function () {
//   resizeCanvas(windowWidth, windowHeight);
// };

function keyPressed() {
  if (key === "s") {
    // console.log("Hi");
    let exportIMG = createGraphics(100 / pixDensity, 100 / pixDensity);
    exportIMG.clear();
    exportIMG.image(cnv, 0, 0, 100 / pixDensity, 100 / pixDensity);
    saveCanvas(exportIMG, "myCanvas", "png");
    // pixelDensity(2);
  }
}

function getWindowSize(width, height) {
  if (width > height) {
    return;
  }
}
