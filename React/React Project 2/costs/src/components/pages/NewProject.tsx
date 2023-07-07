import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectForm } from '../../content/ProjectForm'

import styles from '../../assets/css/NewProject.module.css'

export function NewProject(){
    const navigate = useNavigate()

    async function createPost(project: any){
        project.cost = 0
        project.services = []

        await fetch("http://localhost:5000/projects", {
            method:'POST',
            body:JSON.stringify(project),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/')
            })
    }
    
    useEffect(() => {
        document.title = "New Project"
    }, [])
    
    return(
        <div className={styles.newproject_container}>
            <div>
                <h1>Criar Projeto</h1>
                <p>
                    Crie seu projeto para depois adicionar os serviços
                </p>
            </div>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}