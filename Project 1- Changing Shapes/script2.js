let typeOfShape = "circle";
var numberOfShapes = 100;
var Speed = .3;
var Size = 10;
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;
const d1 = Math.sin(Math.PI*2/20);
const d2 = Math.sin(Math.PI*2/10);
const d3 = Math.sin(Math.PI*2*3/20);
const d4 = Math.sin(Math.PI*2/5);

class shape {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.updateShape();
  }

  updateShape() {
    switch(typeOfShape) {
      default: {
        this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        this.direction = Math.random() * Math.PI*2;
        this.speed = Math.random()*Speed + 1;
        this.size = this.radius * 2;
      }
    }
  }

  updatePosition(width, height) {
    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;
    if (this.x < 0) {
      this.x = this.size / 2;
      this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
    } else if (this.x + this.size> width) {
      this.x = width - this.size * 2
      this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
    }

    if (this.y < 0) {
      this.y = this.size;
      this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
    } else if (this.y + this.size> height) {
      this.y = height - this.size * 2;
      this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
    }
  }

  draw() {
    switch(typeOfShape) {
      case "circle": {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        break;
      }
      case "square": {
        context.fillStyle = this.color;
        context.beginPath();
        context.rect(this.x,this.y,20,20);
        context.fill();
        break
      }
      case "star": {
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(this.x,this.y-this.r);
        context.lineTo(this.x+d2*this.size,this.y+this.size*d3)
        context.lineTo(this.x-d4*this.size,this.y-d1*this.size);
        context.lineTo(this.x+d4*this.size,this.y-d1*this.size);
        context.lineTo(this.x-d2*this.size,this.y+this.size*d3);
        context.lineTo(this.x,this.y-this.size);
        context.fill();
        break;
      } 
      case "daimond": {
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(this.x,this.y);
        context.lineTo(this.x - this.size / 2, this.y + this.size / 2);
        context.lineTo(this.x, this.y + this.size);
        context.lineTo(this.x + this.size / 2, this.y + this.size / 2);
        context.fill();
        break;
      }
      default: {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }
    }
  }
}

var context = document.querySelector("canvas").getContext("2d");
canvas = document.querySelector("canvas");
canvas.addEventListener("click", onMouseClick);
function onMouseClick(){
  switch(typeOfShape) {
    case "circle": typeOfShape = "square"; break;
    case "square": typeOfShape = "star"; break;
    case "star": typeOfShape = "daimond"; break;
    case "daimond": typeOfShape = "circle"; break;
    default: "circle";
  }
  console.log('currently ' + typeOfShape);
}
let shapes = [];

function initializeShapes() {
  shapes = [];
  for(let i = 0; i < numberOfShapes; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    shapes.push(new shape(x, y, Size));
  }
}

initializeShapes();

console.log(shapes);
context.canvas.height = height;
context.canvas.width = width;
function loop() {
  window.requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let aShape of shapes) {
    aShape.updatePosition(width, height);
    aShape.draw();
  }
};

loop();
document.getElementById("myDropdown").classList.toggle("show");
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
