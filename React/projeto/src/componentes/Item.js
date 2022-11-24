import PropTypes from 'prop-types'

function Item({marca, ano_lanc}){
    return(
        <>
            <li>{marca}: {ano_lanc}</li>
        </>
    )
}

Item.protoTypes = {
    marca: PropTypes.string.isRequired,
    ano_lanc: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lanc: 0
}

export default Item