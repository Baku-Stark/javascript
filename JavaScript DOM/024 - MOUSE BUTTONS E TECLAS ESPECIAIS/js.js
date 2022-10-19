document.querySelector('div').addEventListener("mousedown", () => {
    console.log(event.button)

    if(event.shiftKey){
        console.log('ShiftKey ativado!')
    }
    if(event.altKey){
        console.log('AltKey ativado!')
    }
    if(event.ctrlKey){
        console.log('CtrlKey ativado!')
    }
    if(event.ctrlKey && event.shiftKey){
        console.log('Ctrl + Shift + Click!')
    }
})