import { useLocation } from 'react-router-dom'

// DASHBOARD[BAR]
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
// DASHBOARD[BAR]========

import { LinkButton } from '../layouts/LinkButton'
import { Message } from '../layouts/Message'
import { ProjectCard } from '../ProjectCard'

import styles from '../../assets/css/LoadProject.module.css'
import { useEffect, useState } from 'react'

export function LoadProject(){
    const [projects, setProjects] = useState([])

    // MESSAGE========
    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    // DASHBOARD[BAR]========
    const [dashBoard, setDashBoard] = useState([])

    const data = {
        labels:['Qtd. De Projetos'],
        datasets:[
            {
                label:'Projetos',
                data:[dashBoard.length],
                backgroundColor:['yellow'],
                borderColor:'black',
                borderWidth:1
            }
        ]
    }

    const options = {}

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setDashBoard(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/new_project/" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <div>
                <Bar
                    className={styles.bar}
                    data={data}
                    options={options}
                ></Bar>
            </div>
            <div className={styles.cards}>
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        id={project['id']}
                        name={project['name']}
                        number={project['number']}
                        category={project['category']['name']}
                        key={project['id']}
                    />
                ))}
            </div>
        </div>
    )
}