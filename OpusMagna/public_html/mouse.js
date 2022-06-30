

var canvas;
var ctx;
var esferas = []; //array para armazenar as figuras
var esferaSelecionada; // boolean para indidcar se uma esfera está selecionada

function esfera(x , y) 

{
 this.name = 'esfera';
 this.src = 'img/atm_carbono.png';
 this.x = x;
 this.y = y; 
 this.width = 29;
 this.height = 29;
}


function desenharEsfera( ctx, x, y )
{ 
 ctx.fillStyle = 'rgba(228, 77, 38, 1.0)';
 ctx.beginPath();//início do tracejado
 ctx.moveTo( x, y ); 
 ctx.arc(x, y, 15, 0, Math.PI*2, true); 
 ctx.fill(); //preencimento do círculo com a cor vermelha         
 ctx.closePath(); //fim do traçado      
 //ctx.drawImage(esfera(x,y));
 
}



function selecionarEsfera(x,y)
{
 ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
 ctx.beginPath();
 ctx.arc(x, y, 16, 0, Math.PI*2, true); 
 ctx.closePath();
 ctx.fill();
 ctx.lineWidth = 2;
 ctx.strokeStyle = 'rgba(43, 45, 203, 1.0)';
 ctx.stroke(); 
}



function paint() { 
 //limpia canvas
 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);     
 //si se tiene un shape seleccionado se pintara una rectangulo a su alrededor
 if( esferaSelecionada !== undefined)
   selecionarEsfera(  esferas[esferaSelecionada].x , esferas[esferaSelecionada].y  );
    //pinta los shappes
 for (var i=0; i<esferas.length; i++)    
   desenharEsfera(ctx, esferas[i].x , esferas[i].y );   
}



function init()
{
 var width = canvas.width;
 var height = canvas.height;
 
 //crea los objetos 
    for (var i=0; i<12; i++) {
        var x = Math.random()*width;
        var y = Math.random()*height;
  esferas.push( new esfera( x, y ) );  
   
    }
}

$(function(){     
 canvas = document.getElementById('canvas');
 ctx = canvas.getContext('2d');
 init();  

 //almacena las coordenas X,Y antes de realizar un desplazamiento
 var oldX,oldY;
 //coordenas del raton
 var mouseX = 0;
 var mouseY = 0;

//eventos del raton
 $('#canvas').mousedown(function(e) {    
  //se capturan coordenas del mouse
  mouseX = e.pageX;
  mouseY = e.pageY;
  //se controla en todos los shapes
  for (var i=0; i<esferas.length; i++) 
  {
   //se determina si se presiono el mouse encima de un shape
   if ( (mouseX>esferas[i].x) && (mouseX < (esferas[i].x + esferas[i].width) ) &&
     (mouseY>esferas[i].y) && (mouseY < (esferas[i].y + esferas[i].height) ) ) 
   {
    // coordenas X,Y donde se hizo clic
    oldX = mouseX;
    oldY = mouseY;
                esferaSelecionada = i;
                break;
            }
        }
    });

 $('#canvas').mousemove(function(e) { 
  mouseX = e.pageX;
  mouseY = e.pageY;
  //si existe un shape seleccionado
  if (esferaSelecionada !== undefined) {
   //se calcula la distancia del dezplazamiento
   var dx =  mouseX - oldX;
   var dy =  mouseY- oldY;   
   //se asignan nuevos valores
   oldX = mouseX;
   oldY = mouseY;   
   //se actualiza coordenadas X,Y del shape seleccionado
   esferas[esferaSelecionada] = new esfera(  esferas[esferaSelecionada].x + dx,  esferas[esferaSelecionada].y + dy );    
        }
    });

    $('#canvas').mouseup(function(e) { 
  esferaSelecionada = undefined;
    }); 

 //todo el lienzo se repinta cada 50 milisegundos
  setInterval(paint, 50); 
  
});