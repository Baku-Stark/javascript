import { useEffect } from 'react'

export function Contact(){
    useEffect(() => {
        document.title = "Contact"
    }, [])

    const contacts = [
        {
            "contact": "Email",
            "content": "admin@email.com"
        },
        {
            "contact": "Email Company",
            "content": "empresa@email.com"
        },
        {
            "contact": "Phone",
            "content": "(10)12345-6789"
        },
    ]
    return(
        <div>
            <ul>
                {contacts.map((item) => (
                    <li>
                        <strong>{item.contact}: </strong>
                        {item.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}