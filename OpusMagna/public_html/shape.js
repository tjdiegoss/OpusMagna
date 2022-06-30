

var canvas;
var ctx;
var shapes = []; //array para almacenar las figuras
var selectedShape; // bandera para saber si existe un shape seleccionado

function html5(x , y) 

{
 this.name = 'html5';
 this.x = x;
 this.y = y; 
 this.width = 100;
 this.height = 114;
}

function drawhtml5( ctx, x, y )
{ 
 ctx.fillStyle = 'rgba(228, 77, 38, 1.0)';
 ctx.beginPath();
 ctx.moveTo( x, y ); 
 //cuerpo
 ctx.lineTo( x , y  ); ctx.lineTo( x +  100, y  );  
 ctx.lineTo( x + 90 , y + 100 );     ctx.lineTo( x  + 50  , y + 114 );     
 ctx.lineTo( x  + 10  , y + 100 );     
 ctx.closePath();  
 ctx.fill();
 // numero 5
 ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';  
 ctx.beginPath(); 
 x = x +20 ;  y = y +20 ; //nueva coordenada 
 ctx.moveTo( x, y ); 
 ctx.lineTo( x , y  ); 
 ctx.lineTo( x +60 , y  );   
 ctx.lineTo( x +60 , y  + 15 );     
 ctx.lineTo( x +15 , y  + 15 );         
 ctx.lineTo( x +15 , y  + 25 );           
 ctx.lineTo( x + 58 , y  + 25 );             
 ctx.lineTo( x + 55 , y  + 65 );                 
 ctx.lineTo( x + 30 , y  + 70 );               
 ctx.lineTo( x + 5 , y  + 65 );                 
 ctx.lineTo( x + 2 , y  + 45 );
 ctx.lineTo( x + 15 , y  + 45 );                     
 ctx.lineTo( x + 15 , y  + 55 );                      
 ctx.lineTo( x + 30 , y  + 60 );                       
 ctx.lineTo( x + 45 , y  + 53 );    
 
}

function drawBox(x,y)
{
 ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
 ctx.beginPath();
 ctx.rect(x, y, 100, 114);
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
 if( selectedShape !== undefined )
   drawBox(  shapes[selectedShape].x , shapes[selectedShape].y  );    
 //pinta los shappes
 for (var i=0; i<shapes.length; i++)    
   drawhtml5(ctx, shapes[i].x , shapes[i].y );   
}



function init()
{
 var width = canvas.width;
 var height = canvas.height;
 //crea los objetos 
    for (var i=0; i<12; i++) {
        var x = Math.random()*width;
        var y = Math.random()*height;
  shapes.push( new html5( x, y ) );      
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
  for (var i=0; i<shapes.length; i++) 
  {
   //se determina si se presiono el mouse encima de un shape
   if ( (mouseX>shapes[i].x) && (mouseX < (shapes[i].x + shapes[i].width) ) &&
     (mouseY>shapes[i].y) && (mouseY < (shapes[i].y + shapes[i].height) ) ) 
   {
    // coordenas X,Y donde se hizo clic
    oldX = mouseX;
    oldY = mouseY;
                selectedShape = i;
                break;
            }
        }
    });

 $('#canvas').mousemove(function(e) { 
  mouseX = e.pageX;
  mouseY = e.pageY;
  //si existe un shape seleccionado
  if (selectedShape !== undefined) {
   //se calcula la distancia del dezplazamiento
   var dx =  mouseX - oldX;
   var dy =  mouseY- oldY;   
   //se asignan nuevos valores
   oldX = mouseX;
   oldY = mouseY;   
   //se actualiza coordenadas X,Y del shape seleccionado
   shapes[selectedShape] = new html5(  shapes[selectedShape].x + dx,  shapes[selectedShape].y + dy );    
        }
    });

    $('#canvas').mouseup(function(e) { 
  selectedShape = undefined;
    }); 

 //todo el lienzo se repinta cada 50 milisegundos
  setInterval(paint, 50); 
});