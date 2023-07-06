import { useEffect } from 'react'

import { LinkButton } from '../layouts/LinkButton'

import styles from '../../assets/css/Home.module.css'
import savings from '../../assets/img/undraw_savings_re_eq4w.svg'

export function Home(){
    useEffect(() => {
        document.title = "Costs - Home Page"
    }, [])

    return(
        <div className={styles.home_container}>
            <h1 className={styles.title}>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>
                Comece a gerenciar os seus projetos agora mesmo!
            </p>
            <LinkButton to="/new_project" text="Criar Projeto"/>
            <img src={savings} alt="Costs - Savings" />
        </div>
    )
}