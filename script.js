let buttons = document.querySelectorAll(".button")
const display = document.getElementById("display")
console.log(buttons)

let onClickEvent = (e) => {
    e.preventDefault();
    // i wonder if this approachis  susiptible to injection attack 
    let clicked = e.target.innerHTML
    // checks if clear is pressed 
    switch (clicked){
        case 'C':
            display.innerHTML = 0;
            break;
        case '=':
            try {
                display.innerHTML = eval(display.innerHTML);
            }
            catch (err){
                display.innerHTML = "error pls click C"
            }
            break;
        default:
            //ux ¯\_(ツ)_/¯
            (display.innerHTML == 0) ? display.innerHTML = e.target.innerHTML : display.innerHTML += e.target.innerHTML;
            break;
    }
}

for(let i = 0; i<buttons.length ; i++){
    // adds button event listener to click
    buttons[i].addEventListener('click', onClickEvent)
}
