import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Loading } from '../layouts/Loading'
import { LinkButton } from '../layouts/LinkButton'
import styles from '../../assets/css/EditProject.module.css'

export function EditProject(){
    // === PEGANDO O ID ATIVO
    const {id} = useParams()

    const [showProjectForm, setShowProjectForm] = useState(false)
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    const [project, setProject] = useState([])
    useEffect(() => {
        setTimeout(() => {
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
        }, 300)
        
        document.title = `${project.name} - Edit`
    }, [id])

    return(
        <>
            {project.name ? (
                <div className={styles.edit_container}>
                    <div className={styles.title_container}>
                        <h2>
                            Projeto: <span>{project['name']}</span>
                        </h2>
                        <button
                            onClick={toggleProjectForm}
                            className={styles.btn}
                        >
                            {!showProjectForm ? "Editar Projeto" : "Fechar Formulario"}
                        </button>
                    </div>
                    {!showProjectForm ? (
                        <div className={styles.content_container}>
                            <h4>Detalhes do projeto</h4>
                            <p>
                                <span>Categoria: </span>{project['category']['name']}
                            </p>
                            <p>
                                <span>Orçamento: </span>R${project['number']}
                            </p>
                            <p>
                                <span>Total Utilizado: </span>R${project['number']}
                            </p>
                        </div>
                    ): (
                        <form method='POST'>
                            <fieldset>
                                <legend>Editando</legend>
                                <div></div>
                            </fieldset>
                        </form>
                    )}
                </div>
            ) : (
            <Loading/>
            )}
        </>
    )
}