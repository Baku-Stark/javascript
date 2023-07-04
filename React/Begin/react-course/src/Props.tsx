function Props({cor, city}: any){
    return(
        <div>
            <h1 style={{color: cor}}>PROPS!!!</h1>
            {/* CONDIÇÃO 'IF ELSE' */}
            <p>Cidade: {city ? city : "Coringa"}</p>
        </div>
    )
}

export default Props