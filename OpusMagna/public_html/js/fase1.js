//canvas
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

carregarParede();
carregarPorta();
carregarMesa();
carregarBuracos();
carregarEsferas();
escreverTexto();

//background
function carregarParede(){
var bgImage = new Image();
bgImage.src = 'img/parede_Porta.png';
ctx.drawImage(bgImage, 0, 0, 800, 600);
}

//porta
function carregarPorta(){
var porta = new Image();
porta.src = 'img/porta.png';


            var y = 145;
            ctx.drawImage(porta, 538, y, 213, 454);
            
            var interval = window.setInterval('portaLoop()', 1);
            
            function portaLoop(){
                moverPorta();
                if (y === -400)
                    window.clearInterval(interval);
            }
            
            function moverPorta(){
                ctx.clear();
                y = y - 1;
                
                carregarParede();
                ctx.drawImage(porta, 538, y);
                carregarMesa();
                carregarBuracos();
                carregarEsferas();
                escreverTexto();
                
            }

}

//mesa, alavanca e buracos da mesa
function carregarMesa(){
var mesa = new Image();
mesa.src = 'img/mesa.png';
ctx.drawImage(mesa, 300, 373, 213, 227);

var alavanca = new Image();
alavanca.src = 'img/alavanca.png';
ctx.drawImage(alavanca, 468, 400, 30, 30);

var buracoMesa = new Image();
buracoMesa.src = 'img/buraco_mesa.png';
ctx.drawImage(buracoMesa, 320, 395, 40, 25);
ctx.drawImage(buracoMesa, 415, 395, 40, 25);
}

//buraco esfera
function carregarBuracos(){
var buracoParede = new Image();
buracoParede.src = 'img/buraco_parede.png';
ctx.drawImage(buracoParede, 15, 50, 30, 30);
ctx.drawImage(buracoParede, 60, 50, 30, 30);
ctx.drawImage(buracoParede, 105, 50, 30, 30);
ctx.drawImage(buracoParede, 150, 50, 30, 30);
ctx.drawImage(buracoParede, 195, 50, 30, 30);
ctx.drawImage(buracoParede, 240, 50, 30, 30);

ctx.drawImage(buracoParede, 15, 95, 30, 30);
ctx.drawImage(buracoParede, 60, 95, 30, 30);
ctx.drawImage(buracoParede, 105, 95, 30, 30);
ctx.drawImage(buracoParede, 150, 95, 30, 30);
ctx.drawImage(buracoParede, 195, 95, 30, 30);
ctx.drawImage(buracoParede, 240, 95, 30, 30);

ctx.drawImage(buracoParede, 15, 140, 30, 30);
ctx.drawImage(buracoParede, 60, 140, 30, 30);
ctx.drawImage(buracoParede, 105, 140, 30, 30);
ctx.drawImage(buracoParede, 150, 140, 30, 30);
ctx.drawImage(buracoParede, 195, 140, 30, 30);
ctx.drawImage(buracoParede, 240, 140, 30, 30);

ctx.drawImage(buracoParede, 15, 185, 30, 30);
ctx.drawImage(buracoParede, 60, 185, 30, 30);
ctx.drawImage(buracoParede, 105, 185, 30, 30);
ctx.drawImage(buracoParede, 150, 185, 30, 30);
ctx.drawImage(buracoParede, 195, 185, 30, 30);
ctx.drawImage(buracoParede, 240, 185, 30, 30);

ctx.drawImage(buracoParede, 15, 235, 30, 30);
ctx.drawImage(buracoParede, 60, 235, 30, 30);
ctx.drawImage(buracoParede, 105, 235, 30, 30);
ctx.drawImage(buracoParede, 150, 235, 30, 30);
ctx.drawImage(buracoParede, 195, 235, 30, 30);
ctx.drawImage(buracoParede, 240, 235, 30, 30);

ctx.drawImage(buracoParede, 15, 280, 30, 30);
ctx.drawImage(buracoParede, 60, 280, 30, 30);
ctx.drawImage(buracoParede, 105, 280, 30, 30);
ctx.drawImage(buracoParede, 150, 280, 30, 30);
ctx.drawImage(buracoParede, 195, 280, 30, 30);
ctx.drawImage(buracoParede, 240, 280, 30, 30);
}

//átomos
function carregarEsferas(){
var atmHidrogenio = new Image();
atmHidrogenio.src = 'img/atm_hidrogenio.png';
ctx.drawImage(atmHidrogenio, 105, 235, 29, 29);
ctx.drawImage(atmHidrogenio, 60, 50, 29, 29);
ctx.drawImage(atmHidrogenio, 105, 280, 29, 29);
ctx.drawImage(atmHidrogenio, 195, 140, 29, 29);
ctx.drawImage(atmHidrogenio, 150, 95, 29, 29);

var atmCloro = new Image();
atmCloro.src = 'img/atm_cloro.png';
ctx.drawImage(atmCloro, 15, 140, 29, 29);
ctx.drawImage(atmCloro, 195, 185, 29, 29);
ctx.drawImage(atmCloro, 240, 50, 29, 29);
ctx.drawImage(atmCloro, 60, 185, 29, 29);
ctx.drawImage(atmCloro, 195, 280, 29, 29);

var atmLantanio = new Image();
atmLantanio.src = 'img/atm_lantanio.png';
ctx.drawImage(atmLantanio, 15, 50, 29, 29);
ctx.drawImage(atmLantanio, 195, 235, 29, 29);

var atmAluminio = new Image();
atmAluminio.src = 'img/atm_aluminio.png';
ctx.drawImage(atmAluminio, 105, 50, 29, 29);
ctx.drawImage(atmAluminio, 15, 280, 29, 29);
ctx.drawImage(atmAluminio, 150, 140, 29, 29);

var atmOxigenio = new Image();
atmOxigenio.src = 'img/atm_oxigenio.png';
ctx.drawImage(atmOxigenio, 150, 50, 29, 29);
ctx.drawImage(atmOxigenio, 60, 280, 29, 29);

var atmSodio = new Image();
atmSodio.src = 'img/atm_sodio.png';
ctx.drawImage(atmSodio, 195, 50, 29, 29);
ctx.drawImage(atmSodio, 15, 95, 29, 29);
ctx.drawImage(atmSodio, 60, 280, 29, 29);
ctx.drawImage(atmSodio, 240, 280, 29, 29);

var atmFerro = new Image();
atmFerro.src = 'img/atm_ferro.png';
ctx.drawImage(atmFerro, 240, 95, 29, 29);
ctx.drawImage(atmFerro, 240, 185, 29, 29);
ctx.drawImage(atmFerro, 150, 280, 29, 29);

var atmPrata = new Image();
atmPrata.src = 'img/atm_prata.png';
ctx.drawImage(atmPrata, 60, 95, 29, 29);
ctx.drawImage(atmPrata, 240, 140, 29, 29);
ctx.drawImage(atmPrata, 150, 185, 29, 29);
ctx.drawImage(atmPrata, 15, 235, 29, 29);

var atmPlutonio = new Image();
atmPlutonio.src = 'img/atm_plutonio.png';
ctx.drawImage(atmPlutonio, 15, 185, 29, 29);
ctx.drawImage(atmPlutonio, 60, 280, 29, 29);
ctx.drawImage(atmPlutonio, 105, 140, 29, 29);
ctx.drawImage(atmPlutonio, 240, 235, 29, 29);

var atmHelio = new Image();
atmHelio.src = 'img/atm_helio.png';
ctx.drawImage(atmHelio, 105, 95, 29, 29);
ctx.drawImage(atmHelio, 105, 185, 29, 29);
ctx.drawImage(atmHelio, 195, 235, 29, 29);

var atmPotassio = new Image();
atmPotassio.src = 'img/atm_potassio.png';
ctx.drawImage(atmPotassio, 195, 95, 29, 29);
ctx.drawImage(atmPotassio, 60, 140, 29, 29);
ctx.drawImage(atmPotassio, 60, 235, 29, 29);
ctx.drawImage(atmPotassio, 150, 235, 29, 29);
}

//texto
function escreverTexto(){
ctx.fillStyle = "rgb (128, 128, 128)";
ctx.font = "24px Tahoma";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Ácido Clorídrico", 560, 100);
}