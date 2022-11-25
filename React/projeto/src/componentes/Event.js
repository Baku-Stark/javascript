import Button from './event/Button'
/* <Button /> => Importado */

function Event(){
    function meuEvento(){
        console.log(`Ativando primeiro evento.`)
    }
    function segundoEvento(){
        console.log('Ativando segundo evento.')
    }
    return(
        <div>
            <h1>Testando Eventos:</h1>
            <p>Clique para disparar um evento.</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Event