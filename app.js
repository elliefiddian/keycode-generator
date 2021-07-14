// keycode generator
// when key is pressed browser shows:
// event.key
// event.code
// event.which 
// needs to be mobile friendly 


const key = document.getElementById ("pressed key");
const keycode = document.getElementById ("key");
let eventKey = document.getElementById("eventKey");
let eventLocation = document.getElementById ("eventLocation");
let eventWhich = document.getElementById ("eventWhich");
let eventCode = document.getElementById ("eventCode");



document.addEventListener('keydown',(e) =>{
    // key.textContent = e.key;
    // keycode.textContent = e.key;
    eventKey.textContent =e.key;
    eventLocation.textContent =e.location;
    eventWhich.textContent =e.which;
    eventCode.textContent =e.code;
})


