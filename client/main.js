ip = prompt("ip del servidor(si es estas en el Pc pon 'localhost')")
var socket = io.connect("http://"+ip+":7000")

document.getElementById('status').innerHTML = '●disconected';
document.getElementById('status').style.color = 'red'

setInterval(function() {
	if (socket.connected == true) {
		document.getElementById('status').innerHTML = '●connected';
		document.getElementById('status').style.color = 'lime'
	}
	if(socket.disconnected == true){
		document.getElementById('status').innerHTML = '●disconected';
		document.getElementById('status').style.color = 'red'
	}
},1000)

var h = 0;
var v = 0;

//Enviar Estado de Teclas Al servidor
function move(key) {
	if (key=="left") {
	    h = -1;
	    document.getElementById('info').innerHTML = '<--Izquerda'
	}else if(key=="right"){
	    h = 1;
	    document.getElementById('info').innerHTML = 'Derecha-->'
	}else if(key=="rH"){
		h = 0;
		document.getElementById('info').innerHTML = 'Vertical'
	}
	if(key=="up"){
		v = -1;
		document.getElementById('info').innerHTML = '^'
	}else if(key=="down"){
	    v = 1;
	    document.getElementById('info').innerHTML = 'V'
	}else if(key=="rV"){
		v = 0;
		document.getElementById('info').innerHTML = 'V'
	}
	    
	    socket.emit("Dir2",{horizontal:h,vertical:v});
}

//---------------PRESIONAR TECLA------------------

document.addEventListener('keydown', function(event) {

	//LEFT/RIGHT

    if(event.keyCode == 37) {
		move("left")
    }
    else if(event.keyCode == 39) {
		move("right")
    }

	//UP/DOWN
    if(event.keyCode == 38) {
		move("up")
    }
    else if(event.keyCode == 40) {
		move("down")
    }

    if (event.keyCode == 113) {
    	location.href="http://192.168.8.103:8080";
    }
});

document.addEventListener('keyup', function(event) {

	//LEFT/RIGHT

    if(event.keyCode == 37 || event.keyCode == 39) {
		move("rH")
    }

    if(event.keyCode == 38 || event.keyCode == 40) {
		move("rV")
    }
});