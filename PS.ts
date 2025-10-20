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

class Jogador {
  constructor(tipoJ) {
    this.id = tipoJ; 
    this.largura = 20;
    this.altura = 60;
    if (this.id == 1) {
      this.posicaoX = 0;
      
    } else if (this.id == 2) {
      this.posicaoX = width - this.largura;
      
    }
    this.posicaoY = height / 2 ; 
    this.velocidade = 10;
  }

  movimentar(){}
  
  desenhar(){ 
    rect(this.posicaoX, this.posicaoY, this.largura, this.altura);
  }
  
}
 
        



let posicaoX: number 

let posicaoY: number 

let velocidade: number 


 function setup() {
  createCanvas(400,400);
    posicaoX = width / 2;
    posicaoY = height / 2;
    velocidade = 3;

    Bola1 = new Bola();
    jogador1 = new Jogador(1);
    jogador2 = new Jogador(2);
    
}

function draw() {
  background(55,20,200);
  Bola1.Desenhar();
  Bola1.Movimentar();
  Bola1.BorderCheck();
  jogador1.desenhar();
  jogador2.desenhar();
  

}


