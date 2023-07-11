import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { parse, v4 as uuidv4 } from 'uuid'

import { Loading } from '../layouts/Loading'
import { ServiceCard } from '../service/ServiceCard'
import { ServiceForm } from '../service/ServiceForm'
import { ProjectForm } from '../../content/ProjectForm'

import styles from '../../assets/css/EditProject.module.css'

export function EditProject(){
    // === PEGANDO O ID ATIVO
    const {id} = useParams()

    // SERVIÇOS
    const [services, setServices] = useState([])

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
                    setServices(data.services)
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

    // === CRIAR UM SERVIÇO
    async function createService(project: any){
        // last service
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.number)){
            // mostrar mensagem de error
            console.log("ERROR!")
            project.services.pop()
        }

        else{
            // adicionar o custo
            project.cost = newCost

            // atualizar projeto(cost)
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
                    setShowServiceForm(false)
                })
                .catch((err) => console.log(err))

            console.log("SERVIÇO CRIADO COM SUCESSO!")
        }
    }

    // === EXCLUIR UM SERVIÇO
    async function removeServie(id: any, cost: any){
        const servicesUpdated = project.services.filter(
            (service: any) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        await fetch(`http://localhost:5000/projects/${projectUpdated['id']}`, {
            method:'PATCH',
            body:JSON.stringify(projectUpdated),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
            })
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
                            <ProjectForm
                                handleSubmit={updateProject} btnText="Concluir Edição" projectData={project}
                            />
                        )}
                    </div>
                    {/* ===== SERVICES (CREATE) ===== */}
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
                                <h4>Insira um novo serviço ao seu projeto</h4>
                            </div>
                        ) : (
                            <ServiceForm
                                handleSumbit={createService}
                                btnText="Adicionar Serviços"
                                projectData={project}
                            />
                        ) }
                    </div>
                    {/* ===== SERVICES (READ) ===== */}
                    <div className={styles.service_container}>
                        <h2>
                            Serviços
                        </h2>
                        <div className={styles.content_container}>
                            {services.length > 0 && services.map((service) => (
                                <ServiceCard
                                    key={service['id']}
                                    id={service['id']}
                                    name={service['name']}
                                    cost={service['cost']}
                                    description={service['description']}
                                    handleRemove={removeServie}
                                />
                            ))}
                            {services.length === 0 && (
                                <p>Não há serviços no cadastrados...</p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <Loading/>
            )}
        </>
    )
}