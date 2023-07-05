import { useEffect } from 'react'

export function Home(){
    useEffect(() => {
        document.title = "Costs - Home Page"
    }, [])
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}