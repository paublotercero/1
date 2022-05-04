let setting;
let sun;
let moon;
let cactus;
let sunray;
let skull;
let olmec;

let olde;

let a = 0.0
let b = 0.0

let angle = 0;

function preload(){
  setting = createImg('blue.jpg')
  sun = createImg('sun.png')
  moon = createImg('moon.png')
  cactus = createImg('cactus.png')
  sunray = createImg('sunray.png')
  skull = createImg('skull.png')
  olmec = createImg('olmec.png')
  
  olde = loadFont('olde.ttf')
}

function setup() {
  createCanvas(500, 650);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(220);
  // scale
  
  //background
  image(setting, 0, 0, 500, 650)
  
  
  for (var x = 0; x<= width; x = x + 30){
    for (var y = 0; y<= height; y = y + 30){
      fill (255)
      stroke(255)
      ellipse(x,y,1,2)
    }
  }
  
  //sunray
  push()
  
  //sunray
    a = a + 0.5
  b = cos(a)*1.5
  if(b > 0){
     b = cos(a)*2 
    
  }
  
  imageMode(CENTER)
  rectMode(CENTER)
  translate(250,325)
  scale(b)
  image(sunray,0,0,300,300)
  pop()
  
   push()
  
  //sunray
    a = a + 0.5
  b = cos(a)*2 
  
  imageMode(CENTER)
  rectMode(CENTER)
  translate(250,325)
  scale(b)
  image(sunray,0,0,350,350)
  pop()
  
  //sun
  push()
  imageMode(CENTER)
  translate (150,100)
  rotate(angle)
  angle = angle +1 
  image(sun, 0, 0, 150, 150)
  
  pop()
  
  //moon
  push()
  
   translate (350,100)
  rotate(angle)
  angle = angle +1 
  imageMode(CENTER)
  image(moon,0,0,70,70)
  
  pop()
  
  
  //cactus
  image(cactus,100,80,300,350)
  
  image(cactus,200,200,300,350)
  
  image(cactus,-10,200,300,350)
  
  //skull
  image(skull,100,300,300,300)
  
  //olmec heads
  image(olmec, 105, 390, 300,300)
  
  //text
  
  noStroke()
  fill(0)
  textFont(olde)
  textSize(10)
  text('SIN MIEDO', 223,450)
  text ('POR VIDA',225, 470)
  
}
