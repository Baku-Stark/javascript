document.querySelector("div").addEventListener('mousemove', () =>{
    console.log(event.pageX + ":" + event.pageY)

    if(event.pageX <= 100){
        event.target.style.backgroundColor = 'aqua'
        event.target.style.color = 'black'
    }

    else if(event.pageX <= 200){
        event.target.style.backgroundColor = 'black'
        event.target.style.color = 'aliceblue'
    }

    else{
        event.target.style.backgroundColor = 'cornflowerblue'
        event.target.style.color = 'black'
    }
})