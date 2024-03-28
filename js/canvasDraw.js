const canvas = document.getElementById('canvas_draw');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext('2d');

context.lineWidth = 8;

let isDrawing = false;

const startDrawing = (event) => {
  isDrawing = true;
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
}
const stopDrawing = () => {
  isDrawing = false;
}
const draw = (event) => {
  if (!isDrawing) return;
  context.lineTo(event.clientX, event.clientY);
  context.stroke();
}
const enterCanvas = (event) => {
  context.beginPath();
}


canvas.addEventListener("touchstart", function (e) {
  isDrawing = true;
  var touch = e.touches[0];
  context.beginPath();
  context.moveTo(touch.clientX, touch.clientY);
}, false);

canvas.addEventListener("touchend", function (e) {
    isDrawing = false;
}, false);

canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

window.addEventListener("mousedown", startDrawing);
window.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseover", enterCanvas);