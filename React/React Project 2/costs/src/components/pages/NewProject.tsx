import { useEffect } from 'react'
import { ProjectForm } from '../../content/ProjectForm'

import styles from '../../assets/css/NewProject.module.css'

export function NewProject(){
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
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}