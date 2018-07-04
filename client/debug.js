var socket = io.connect("http://192.168.8.101:7000",{"forceNew":true})	//IP
socket.on("dir",function(dir) {
	if (dir.hor==1) {
		document.getElementById("right").style.backgroundColor = "green";
	}else if (dir.hor==-1) {
		document.getElementById("left").style.backgroundColor = "green";
	}else{
		document.getElementById("left").style.backgroundColor = "white";
		document.getElementById("right").style.backgroundColor = "white";
	}
	if (dir.ver==-1) {
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
	}
})