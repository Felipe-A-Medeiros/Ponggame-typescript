/// <reference types="p5/global" /> ;
 
class Bola { 
  constructor() { 
      this.posicaoX = width / 2;
      this.posicaoY = width / 2;
      this.velocidadeX= random (-5,-3,3,5);   
      this.velocidadeY = random (-5,-3,3,5);
      this.diametro = 20; 
                            } 

 

  Desenhar() {
    circle (this.posicaoX,this.posicaoY,this.diametro);  
  }

  Movimentar(){
  this.posicaoX += this.velocidadeX;
  this.posicaoY += this.velocidadeY;
  }

  BorderCheck(){
          
  if(this.posicaoX - this.diametro /2 <= 0) {
    this.velocidadeX *= -1;
  } 
  if (this.posicaoX + this.diametro /2 >= width ) {
    this.velocidadeX *= -1;
  }
  if (this.posicaoY - this.diametro /2 <= 0) {
    this.velocidadeY *= -1;
  }
  if (this.posicaoY + this.diametro /2 >= height) {
    this.velocidadeY *= -1;
  }
          
            }

} 

class jogador {
  constructor() {
    this.id = 1; 
    
  }
}
 
        



let posicaoX: number 

let posicaoY: number 

let velocidade: number 


 function setup() {
  createCanvas(500, 500);
    posicaoX = width / 2;
    posicaoY = height / 2;
    velocidade = 3;

    Bola1 = new Bola();
}

function draw() {
  background(55,20,200);
  Bola1.Desenhar();
  Bola1.Movimentar();
  Bola1.BorderCheck();
  
  

}


