console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");
	
var joystick	= new VirtualJoystick({
	container	: document.getElementById('container'),
	mouseSupport	: true,
	strokeStyle : "#161616",
});
setInterval(function() {
    if(joystick.up()==true) {
		move("up")
    }else if(joystick.down()==true) {
		move("down")
    }else{
		move("rV")
    }

    if(joystick.left()==true) {
		move("left")
    }else if(joystick.right()==true) {
		move("right")
    }else{
		move("rH")
    }
},150)