import Item from './Item'
/* <Item /> => Importado */

function List(){
    return(
        <>
            <h1>
                Minha Lista
            </h1>
            <ul>
                <Item marca="Ferrari" ano_lanc={1985}/>
                <Item marca="Fiat" ano_lanc={1964}/>
                <Item marca="Renault" ano_lanc={2000}/>
                <Item/>
            </ul>
        </>
    )
}

export default List