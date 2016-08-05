//2016 08 05
//p5js udd

//setup se escribe 1 vez
//se pone al principio
//vamos a hacer una elipse que siga el mouse
//para crear variables
//var nombre
var x;
//despues de aclarar se puede var valor lo cual se llama asignar

x = 10;
var diametro;
diametro = 1;

//hay dos tipos de variables globales y locales
//globales: declaradas fuera de funcion, se pueden usar en cualquier parte
//locales: declaradas dentro de la funcion, solo se pueden usar dentro de la funcion
//las funciones tambien se declaran, luego de declararas, pueden llamarse
function miFuncion() {
  //esto es lo que hace la funcion
  //se llama cuerpo


}

//declarar nueva funcion
//funcion para hacer elipses, en lugares y colores alearatorias
function muchasElipses(cuantas) {

  //for loop
  //for(inicio; condicion; refresco) {}
  for (var i = 0; i < 750; i++) {
    ellipse(random(width), random(height), random(20, 100), random(20, 100));
  }

}

function miElipse() {

  strokeWeight(random(0));
  //colr borde
  //stroke(color)
  //para no dibujar el borde
  //noStroke()
  stroke(random(100), random(150), 0, 200);
  //relleno
  //fill(color)
  fill(random(10, 255), random(50, 250), random(40, 250), 100);
  //dibujemos elipse
  //ellipse(posx, posy, width, high)
  //para seguir al mouse mouseX y mouseY respectivamente
  ellipse(mouseX - 25, mouseY - 25, diametro, diametro)
    //asignarle nuevo valor a diametro
    //diametro = diametro + 1;
  diametro = random(40, 50);

}

function setup() {
  //crear un lienzo
  //createCanvas(dim hor, dim vertical)
  createCanvas(windowWidth, windowHeight);
  frameRate(15)

  // pintar el fondo
  //background(color)
  //1: grayscale, 0 es negro, 255 es blanco
  //2: grayscale + alpha
  //3: rgb, red, green, blue
  //4: rgb + alpha
  //alpha es transparente, 0 transparent, 255 solido
  background(random(200), random(150), random(185), 255);
  // variable local
  var x;
  x = 10
    //variable local asignando valor rapido
  var y = 20

}

//draw() corre justo despues de setup()
//draw() se ejecuta 60 veces por segundo 
function draw() {
  //pintar el fondo
  background(100, 0, 0, 255)
    //definir ancho de figura
    //strokeWeight(px)
    miElipse();

  //condicional
  //esta en la primer tercio de la ventana
  if (mouseX<width/3) {

    muchasElipses(100, 255);

  }



}

function mousePressed() {



}