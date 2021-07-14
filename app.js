// keycode generator
// when key is pressed browser shows:
// event.key
// event.code
// event.which 
// needs to be mobile friendly 

const displaykey = document.getElementById('.key h2');
const displayKeyCode = document.getElementById('keycode h2');
const keycodeDiv = document.getElementById (.'keycode');


function keycode(event) {
var key = event.key;
var location = event.location;
var which = event.which;
var code = event.code;
head.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventLocation").innerHTML= location;
document.getElementById("eventWhich").innerHTML= which;
document.getElementById("eventCode").innerHTML= code;
generator.classList.remove("show");
welcome.remove()
}
