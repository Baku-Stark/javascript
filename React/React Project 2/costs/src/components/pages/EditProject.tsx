import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Loading } from '../layouts/Loading'
import { ProjectForm } from '../../content/ProjectForm'
import styles from '../../assets/css/EditProject.module.css'

export function EditProject(){
    // === PEGANDO O ID ATIVO
    const {id} = useParams()

    const [showProjectForm, setShowProjectForm] = useState(false)
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
        document.title = `${project.name} - Edit`
    }

    const [showServiceForm, setShowServiceForm] = useState(false)
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
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

    // === EDITAR INFORMAÇÕES
    async function updateProject(project: any){
        if(project['number'] < project['cost']){
            console.log("MAIOR!!")
        }

        else{
            await fetch(`http://localhost:5000/projects/${project['id']}`, {
                method:'PATCH',
                body:JSON.stringify(project),
                headers:{
                    'Content-Type':'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    setShowProjectForm(false)
                })
                .catch((err) => console.log(err))
        }
    }

    return(
        <>
            {project.name ? 
            (
                <>
                    {/* ===== PROJECTS ===== */}
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
                                    <span>Total Utilizado: </span>R${project['cost']}
                                </p>
                            </div>
                        ) : (
                            <ProjectForm handleSubmit={updateProject} btnText="Concluir Edição" projectData={project} />
                        )}
                    </div>
                    {/* ===== SERVICES ===== */}
                    <div className={styles.edit_container}>
                        <div className={styles.title_container}>
                            <h2>
                               Adicione um serviço
                            </h2>
                            <button
                                onClick={toggleServiceForm}
                                className={styles.btn}
                            >
                                {!showServiceForm ? "Adicionar" : "Fechar Formulario"}
                            </button>
                        </div>
                        {!showServiceForm ? (
                            <div className={styles.content_container}>
                                <h4>Serviços</h4>
                            </div>
                        ) : (
                            <div>FOMULARIO</div>
                        ) }
                    </div>
                    <div className={styles.service_container}>
                        <h2>
                            Adicione um serviço
                        </h2>
                        <div className={styles.content_container}>
                            <p>
                                Itens de serviço
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <Loading/>
            )}
        </>
    )
}