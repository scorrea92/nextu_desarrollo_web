var Calculadora = {
	init: function(){
		this.iniciarVariables()
		this.reinicioDisplay()
	},
	iniciarVariables: function(){
		var self = this
		var classname = document.getElementsByClassName("tecla");

		document.getElementById('0').addEventListener('click', function() {
		  self.agregarValor(0)
		})
		document.getElementById('0').addEventListener("mousedown", function(){
			document.getElementById('0').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('0').addEventListener("mouseout", function(){
			document.getElementById('0').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('1').addEventListener('click', function() {
		  self.agregarValor(1)
		})
		document.getElementById('1').addEventListener("mousedown", function(){
			document.getElementById('1').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('1').addEventListener("mouseout", function(){
			document.getElementById('1').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('2').addEventListener('click', function() {
		  self.agregarValor(2)
		})
		document.getElementById('2').addEventListener("mousedown", function(){
			document.getElementById('2').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('2').addEventListener("mouseout", function(){
			document.getElementById('2').setAttribute("style","transform:scale(1,1)")
		})		

		document.getElementById('3').addEventListener('click', function() {
		  self.agregarValor(3)
		})
		document.getElementById('3').addEventListener("mousedown", function(){
			document.getElementById('3').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('3').addEventListener("mouseout", function(){
			document.getElementById('3').setAttribute("style","transform:scale(1,1)")
		})				

		 document.getElementById('4').addEventListener('click', function() {
		  self.agregarValor(4)
		})
		document.getElementById('4').addEventListener("mousedown", function(){
			document.getElementById('4').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('4').addEventListener("mouseout", function(){
			document.getElementById('4').setAttribute("style","transform:scale(1,1)")
		})				 

		document.getElementById('5').addEventListener('click', function() {
		  self.agregarValor(5)
		})
		document.getElementById('5').addEventListener("mousedown", function(){
			document.getElementById('5').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('5').addEventListener("mouseout", function(){
			document.getElementById('5').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('6').addEventListener('click', function() {
		  self.agregarValor(6)
		})
		document.getElementById('6').addEventListener("mousedown", function(){
			document.getElementById('6').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('6').addEventListener("mouseout", function(){
			document.getElementById('6').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('7').addEventListener('click', function() {
		  self.agregarValor(7)
		})
		document.getElementById('7').addEventListener("mousedown", function(){
			document.getElementById('7').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('7').addEventListener("mouseout", function(){
			document.getElementById('7').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('8').addEventListener('click', function() {
		  self.agregarValor(8)
		})
		document.getElementById('8').addEventListener("mousedown", function(){
			document.getElementById('8').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('8').addEventListener("mouseout", function(){
			document.getElementById('8').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('9').addEventListener('click', function() {
		  self.agregarValor(9)
		})
		document.getElementById('9').addEventListener("mousedown", function(){
			document.getElementById('9').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('9').addEventListener("mouseout", function(){
			document.getElementById('9').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('on').addEventListener('click', function() {
		  self.reinicioDisplay()
		})
		document.getElementById('on').addEventListener("mousedown", function(){
			document.getElementById('on').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('on').addEventListener("mouseout", function(){
			document.getElementById('on').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('punto').addEventListener('click', function() {
		  self.anadirPunto()
		})
		document.getElementById('punto').addEventListener("mousedown", function(){
			document.getElementById('punto').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('punto').addEventListener("mouseout", function(){
			document.getElementById('punto').setAttribute("style","transform:scale(1,1)")
		})	

		document.getElementById('sign').addEventListener('click', function() {
		  self.anadirSigno()
		})
		document.getElementById('sign').addEventListener("mousedown", function(){
			document.getElementById('sign').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('sign').addEventListener("mouseout", function(){
			document.getElementById('sign').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('mas').addEventListener('click', function() {
		  self.agregarOperacion('1')
		})
		document.getElementById('mas').addEventListener("mousedown", function(){
			document.getElementById('mas').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('mas').addEventListener("mouseout", function(){
			document.getElementById('mas').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('menos').addEventListener('click', function() {
		  self.agregarOperacion('2')
		})
		document.getElementById('menos').addEventListener("mousedown", function(){
			document.getElementById('menos').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('menos').addEventListener("mouseout", function(){
			document.getElementById('menos').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('por').addEventListener('click', function() {
		  self.agregarOperacion('3')
		})
		document.getElementById('por').addEventListener("mousedown", function(){
			document.getElementById('por').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('por').addEventListener("mouseout", function(){
			document.getElementById('por').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('dividido').addEventListener('click', function() {
		  self.agregarOperacion('4')
		})
		document.getElementById('dividido').addEventListener("mousedown", function(){
			document.getElementById('dividido').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('dividido').addEventListener("mouseout", function(){
			document.getElementById('dividido').setAttribute("style","transform:scale(1,1)")
		})

		document.getElementById('igual').addEventListener('click', function() {
		  self.operacionIgual()
		})
		document.getElementById('igual').addEventListener("mousedown", function(){
			document.getElementById('igual').setAttribute("style","transform:scale(0.95,0.95)")
		})
		document.getElementById('igual').addEventListener("mouseout", function(){
			document.getElementById('igual').setAttribute("style","transform:scale(1,1)")
		})
	},

	validarNumeroDigitos: function(valor){
		var valor = String(valor);
		return valor.substring(0, 8)
	},

	agregarValor: function(valor){
		var self = this

		if(sessionStorage.result==1){
			document.getElementById('display').innerHTML = valor;
			sessionStorage.result=0
		}else{
			if(document.getElementById('display').innerHTML=='0'){
				document.getElementById('display').innerHTML = valor;
			}else{
				var displayNew = document.getElementById('display').innerHTML+valor
				var displayOptimo = self.validarNumeroDigitos(displayNew)
				document.getElementById('display').innerHTML = displayOptimo;
			}
		}
	},

	reinicioDisplay: function(){
		document.getElementById('display').innerHTML = '0';

		sessionStorage.valor = 0;
		sessionStorage.operacion = 0; 
		sessionStorage.result = 0;
		sessionStorage.ultimoResultado = 0
		sessionStorage.operacionActiva = 0
		sessionStorage.valorGuardado = 0
		sessionStorage.countOperadorIgual =0
	},

	agregarOperacion: function(valor){
		var self = this
		var elemento = document.getElementById('display')

		var valorDisplay = Number(elemento.innerHTML)
		var valorOperacion = valor

		if(sessionStorage.result==1){
			sessionStorage.valor = sessionStorage.ultimoResultado
			sessionStorage.result = 0
		}else{
			if(sessionStorage.operacionActiva=='1'){
				sessionStorage.valor = self.resultado(sessionStorage.valor, valorDisplay, sessionStorage.operacion, 1)
				sessionStorage.result = 0

			}else{
				sessionStorage.valor = Number(valorDisplay);
			}
		}

		if(valorDisplay!=''){
			sessionStorage.valorGuardado = Number(valorDisplay);
		}
		
		sessionStorage.countOperadorIgual = 0
		sessionStorage.operacionActiva = 1;
		sessionStorage.operacion = valorOperacion;
		elemento.innerHTML = '';
		
	},

	operacionIgual: function(){
		var self = this
		var elemento = document.getElementById('display');

		var valorDisplay 	= sessionStorage.valor
		var valorOperacion 	= sessionStorage.operacion
		var valorDisplayNew	= elemento.innerHTML

		if(valorDisplayNew==''){
			valorDisplayNew = sessionStorage.valorGuardado
		}else if(valorDisplayNew!='' && sessionStorage.countOperadorIgual==0){
			sessionStorage.valor = valorDisplayNew
			sessionStorage.countOperadorIgual = 1
		}
	
		elemento.innerHTML = self.resultado(valorDisplay, valorDisplayNew, valorOperacion, 0)
	},

	resultado: function(valor1, valor2, operacion, tipo){

		var self = this

		switch(operacion){
			case '1':
				var resultado = (Number(valor1)+Number(valor2))
				break;
			case '2':
				var resultado = (Number(valor1)-Number(valor2))
				break;
			case '3':
				var resultado = (Number(valor1)*Number(valor2))
				break;
			case '4':
				var resultado = (Number(valor1)/Number(valor2))
				break;
		} 

		resultadoValidado = self.validarNumeroDigitos(resultado);
		sessionStorage.operacionActiva = tipo
		sessionStorage.result = 1
		sessionStorage.ultimoResultado = resultadoValidado
		return resultadoValidado;
	},

	anadirPunto: function(){
		var self = this
		var elemento = document.getElementById('display')
		if(elemento.innerHTML.indexOf('.')<0){
			var displayNew = elemento.innerHTML+'.';
			var displayOptimo = self.validarNumeroDigitos(displayNew)
			elemento.innerHTML = displayOptimo;
			
		}
	},
	
	anadirSigno: function(){
		var elemento = document.getElementById('display')
		if(elemento.innerHTML.indexOf('-')<0 && elemento.innerHTML!='0' && elemento.innerHTML!=''){
			
			document.getElementById('display').innerHTML = '-'+elemento.innerHTML;
		}else if(elemento.innerHTML!=0 && elemento.innerHTML!=''){
			
			document.getElementById('display').innerHTML = elemento.innerHTML.substring(1);
		}
	}


}

Calculadora.init()
