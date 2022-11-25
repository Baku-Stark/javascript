function ListaArray({itens}){
    return(
        <div>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                <p>{item}</p>
            ))) : (
                <p>Não há dados na lista.</p>
            )}
        </div>
    )
}

export default ListaArray