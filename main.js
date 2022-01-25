function preload() {}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();
}
function draw() {
  image(video, 170, 120, 300, 250);
  fill("red");
  stroke("red");
  circle(40, 40, 80);
  circle(600, 40, 80);
  circle(600, 440, 80);
  circle(40, 440, 80);
  fill("green");
  stroke("green");
  rect(80, 30, 480, 20);
  rect(80, 430, 480, 20);
  rect(30, 80, 20, 320);
  rect(590, 80, 20, 320);
}
function take_snapshot() {
  save("image.png");
}
