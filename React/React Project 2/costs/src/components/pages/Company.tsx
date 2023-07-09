import { useEffect } from 'react'

export function Company(){
    useEffect(() => {
        document.title = "Costs - Company"
    }, [])
    return(
        <div>
            <p>Uma empresa nada séria</p>
        </div>
    )
}