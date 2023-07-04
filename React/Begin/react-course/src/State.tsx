import {useState} from "react";

function State(){
    const [texto, setTexto] = useState(
        "Um titulo do estado inicial"
    )

    const [inputText, setInputText] = useState("")

    function clicou(){
        setTexto(inputText);
    }

    return(
        <div>
            <h1>STATE!!!</h1>
            <p>{texto}</p>
            <input
                type="text"
                value={inputText}
                // pegar o valor do input
                onChange={(e) => {setInputText(e.target.value)}}
            />
            <button
                onClick={clicou}
            >
                Alterar texto
            </button>
        </div>
    )
}

export default State