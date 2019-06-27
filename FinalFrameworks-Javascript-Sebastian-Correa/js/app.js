//Funcion para hacer el blink de colores en El titulo
function flashtext(ele) {
    var tmpColCheck = document.getElementById( ele ).style.color;

      if (tmpColCheck === 'rgb(255, 255, 255)') {
        document.getElementById( ele ).style.color = '#DCFF0E';
      } else {
        document.getElementById( ele ).style.color = '#fff';
      }
    } 

    setInterval(function() {
        flashtext('titulo');
    }, 500 ); 

//Funcion de llenado aleatorio del tablero
function llenadoTablero(){
	 var top = 5;
  var column = $('[class^="col-"]');
  var col = 0

  column.each(function() {
    var candys = $(this).children().length;
    var agrega = top - candys;
    
    for (var i = 0; i < agrega; i++) {

      var candyType = getRandomInt(1,4);
    
      if (i == 0 && candys < 1) {
        $(this).append('<img src="image/'+candyType+'.png" class="element"></img>');
      } else {
        $(this).find('img:eq(0)').before('<img src="image/'+candyType+'.png" class="element"></img>');
      }
    }
    CandyPropertys();

  });
  eliminarRepetidosFil(0);
  eliminarRepetidosCol(0);
}

//propiedades de los candys
function CandyPropertys() {
  $('img').draggable({
    containment: '.panel-board',
    droppable: 'img',
    revert: true,
    revertDuration: 500,
    grid: [100, 100],
    zIndex: 10,
    drag: constrain
  });
  $('img').droppable({
    drop: cambiarCandy
  });
}
// funcion para cambiar un candy con otro
function cambiarCandy(event, candyDrag) {
  var candyDrag = $(candyDrag.draggable);
  var dragSrc = candyDrag.attr('src');
  var candyDrop = $(this);
  var dropSrc = candyDrop.attr('src');
  // Cambio de candys
  candyDrag.attr('src', dropSrc);
  candyDrop.attr('src', dragSrc);
  //Sumarle uno al contador de movimientos
  movecont +=1
  $('#movimientos-text').text(movecont);
  eliminarRepetidosCol(1);
  eliminarRepetidosFil(1);
}
//Limitaciones del movimiento de los candy
function constrain(event, candyDrag) {
  candyDrag.position.top = Math.min(100, candyDrag.position.top);
  candyDrag.position.bottom = Math.min(100, candyDrag.position.bottom);
  candyDrag.position.left = Math.min(100, candyDrag.position.left);
  candyDrag.position.right = Math.min(100, candyDrag.position.right);
}
//Funcion para buscar y eliminar si estan repetidos columna
function eliminarRepetidosCol(suma){
	var candysArray = $('[class^="element"]');
	for(var j=0; j<7;j++){
	    for (var i = 0 + 5*j; i < 3+ 5*j; i++) {
	    	if(candysArray[i].src==candysArray[i+1].src && candysArray[i+1].src==candysArray[i+2].src){
				if((i-5*j) == 0 && 
				candysArray[i+2].src==candysArray[i+3].src && 
				candysArray[i+3].src==candysArray[i+4].src ){

					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i+4].src = src4;
					if(suma==1){
						puntaje += 15;
						//Animacion
						candysArray.eq(i).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+1).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+2).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+3).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+4).effect( "shake", {times:4}, 1000 );
						$('#score-text').text(puntaje);
					}
					src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src5 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i].src = src1;
					candysArray[i+1].src = src2;
					candysArray[i+2].src = src3;
					candysArray[i+3].src = src4;
					candysArray[i+4].src = src5;
				}else if(((i-5*j) == 0 || (i-5*j) == 1) && candysArray[i+2].src==candysArray[i+3].src) {
					
					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i+3].src = src4;
					if(suma==1){
						puntaje += 10;
						$('#score-text').text(puntaje);
						//Animacion
						candysArray.eq(i).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+1).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+2).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+3).effect( "shake", {times:4}, 1000 );
					}
					src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					
					candysArray[i].src = src1;
					candysArray[i+1].src = src2;
					candysArray[i+2].src = src3;
					candysArray[i+3].src = src4;

				} else{

					if(suma==1){
						puntaje += 5;
						$('#score-text').text(puntaje);
						//Animacion
						candysArray.eq(i).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+1).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+2).effect( "shake", {times:4}, 1000 );
					}

						src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
						src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
						src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
						candysArray[i].src = src1;
						candysArray[i+1].src = src2;
						candysArray[i+2].src = src3;
					eliminarRepetidosCol();
				}
	    	}

	    }
	}
} 
//Funcion para buscar y eliminar si estan repetidos fila
function eliminarRepetidosFil(suma) {
	var candysArray = $('[class^="element"]');
    for (var i = 0 ; i < 25; i++) {
    	if(candysArray[i].src==candysArray[i+5].src && candysArray[i+5].src==candysArray[i+10].src){
			if( i == 0 && 
				candysArray[i+10].src==candysArray[i+15].src && 
				candysArray[i+15].src==candysArray[i+20].src && 
				candysArray[i+20].src==candysArray[i+25].src && 
				candysArray[i+25].src==candysArray[i+30].src ){

					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i+4].src = src4;
					if(suma==1){
						puntaje += 15;
						//Animacion
						candysArray.eq(i).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+5).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+10).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+15).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+20).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+25).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+30).effect( "shake", {times:4}, 1000 );
						$('#score-text').text(puntaje);
					}
					src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src5 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src6 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src7 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i].src = src1;
					candysArray[i+5].src = src2;
					candysArray[i+10].src = src3;
					candysArray[i+15].src = src4;
					candysArray[i+20].src = src5;
					candysArray[i+25].src = src6;
					candysArray[i+30].src = src7;
				}else if( i<15 && 
				candysArray[i+10].src==candysArray[i+15].src && 
				candysArray[i+15].src==candysArray[i+20].src ){

					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i+4].src = src4;
					if(suma==1){
						puntaje += 10;
						//Animacion
						candysArray.eq(i).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+5).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+10).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+15).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+20).effect( "shake", {times:4}, 1000 );
						$('#score-text').text(puntaje);
					}
					src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src5 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i].src = src1;
					candysArray[i+5].src = src2;
					candysArray[i+10].src = src3;
					candysArray[i+15].src = src4;
					candysArray[i+20].src = src5;
				} else if( i<20 && 
				candysArray[i+10].src==candysArray[i+15].src ){

					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i+4].src = src4;
					if(suma==1){
						puntaje += 10;
						//Animacion
						candysArray.eq(i).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+5).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+10).effect( "shake", {times:4}, 1000 );
						candysArray.eq(i+15).effect( "shake", {times:4}, 1000 );
						$('#score-text').text(puntaje);
					}
					src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					src4 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
					candysArray[i].src = src1;
					candysArray[i+5].src = src2;
					candysArray[i+10].src = src3;
					candysArray[i+15].src = src4;
				} else {



				src1 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
				src2 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
				src3 = "file:///Users/sebastiancorrea/Downloads/NEXTU/FinalFrameworks%20Javascript/image/"+getRandomInt(1,4)+".png"
				
				if(suma==1){
					puntaje += 5;
					$('#score-text').text(puntaje);
					//Animacion
					candysArray.eq(i).effect( "shake", {times:4}, 1000 );
					candysArray.eq(i+5).effect( "shake", {times:4}, 1000 );
					candysArray.eq(i+10).effect( "shake", {times:4}, 1000 );
				}	

				candysArray[i].src = src1;
				candysArray[i+5].src = src2;
				candysArray[i+10].src = src3;
				eliminarRepetidosFil();
			}
			
    	}
    }
} 
//funcion para generar aleatorio
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funcion fin del juego 
function endGame() {
  $('div.panel-tablero, div.time').effect('fold');
  document.getElementById('titulo2').style.color = '#DCFF0E';
  $('#titulo2').text('Thanks for playing!');
  $('div.score, div.moves, div.panel-score').width('100%');
}
//Funcion del INICIO DEL DOM
$( document ).ready(function() {
	movecont = 0;
	puntaje = 0;
	$('#score-text').text(puntaje);
	$('#movimientos-text').text(movecont);
	$('#btn').click(function() {
		var text =$(this).text();
		//Revisa si ya inicio o si esta reiniciando
		if (text == 'Iniciar'){
			llenadoTablero();
			$(this).text('Reiniciar');
		}else{
			//Si quiere reiniciar carga de nuevo la pagina
			location.reload(true);
		}
		// Comenzar a contar el tiempo
	    $('#timer').startTimer({
	      onComplete: endGame
	    })	

	});
	
});









