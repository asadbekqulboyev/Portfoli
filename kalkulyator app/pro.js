let display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (a) => {
      
        switch (a.target.innerText) {

            case 'C': display.innerText = '';
                break;
            case '⟼': if (display.innerText) {
                display.style.border = '2px solid white'
                display.innerText = display.innerText.slice(0, -1);
            }
                break;
            case '=':
                if(display.innerText== ''){
                    return  new Audio('./button-2.mp3').play()
;
                  
                }
                try {

                    display.innerText = eval(display.innerText)
                } catch {
                    new Audio('./button-2.mp3').play()
                    display.style.border = '2px solid rgb(236, 66, 23)'
                }
                break;
            default:                    display.style.border = '2px solid white'
 display.innerText += a.target.innerText;
                                new Audio('./click-btn.mp3').play()

        }
    });
});