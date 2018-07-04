var hasGP = false;
var repGP;

function canGame() {
    return "getGamepads" in navigator;
}

function reportOnGamepad() {
    var Jostick = navigator.getGamepads()[0];
    var stickX = Jostick.axes[0];
    var stickY = Jostick.axes[1];

    if(Jostick.buttons[0].pressed){
        console.log("btn_1")
    }

    if (stickX == -1) {
        move("left");
    }
    if (stickX == 1) {
        move("right");
    }
    if (stickY == -1) {
        move("up");
    }
    if (stickY == 1) {
        move("down");
    }
}

//////////////////////////////////////////////////////////

    $(document).ready(function() {
 
        if(canGame()) {
 
            $(window).on("gamepadconnected", function() {
                hasGP = true;
                $("#gamepadPrompt").html("Gamepad connected!");
                console.log("connection event");
                repGP = window.setInterval(reportOnGamepad,100);
            });
 
            $(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                $("#gamepadPrompt").text(prompt);
                window.clearInterval(repGP);
            });
 
            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) $(window).trigger("gamepadconnected");
                    window.clearInterval(checkGP);
                }
            }, 250);
        }
 
    });