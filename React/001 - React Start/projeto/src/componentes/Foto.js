function Foto({nome, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2 className="h2-text">Nome: {nome}</h2>
            <p>Idade: {idade} anos</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Foto