import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from '../../assets/css/EditProject.module.css'

export function EditProject(){
    // === PEGANDO O ID ATIVO
    const {id} = useParams()

    const [project, setProject] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))

        document.title = `${project['name']} - Edit`
    }, [id])

    return(
        <div className={styles.edit_container}>
            <p>Editar! {project['name']}</p>
        </div>
    )
}