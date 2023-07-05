import { useEffect } from 'react'

export function NewProject(){
    useEffect(() => {
        document.title = "New Project"
    }, [])
    return(
        <div></div>
    )
}