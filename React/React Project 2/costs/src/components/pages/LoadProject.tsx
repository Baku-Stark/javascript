import { useLocation } from 'react-router-dom'

// DASHBOARD[BAR]
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
// DASHBOARD[BAR]========

import { Loading } from '../layouts/Loading'
import { Message } from '../layouts/Message'
import { ProjectCard } from '../ProjectCard'
import { LinkButton } from '../layouts/LinkButton'

import styles from '../../assets/css/LoadProject.module.css'
import { useEffect, useState } from 'react'

export function LoadProject(){
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

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

    async function removeProject(id:any){
        await fetch(`http://localhost:5000/projects/${id}`, {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project['id'] !== id))
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        document.title = "Costs - All Projects"
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
                setRemoveLoading(true)
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
            <hr />
            <div className={styles.cards}>
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        id={project['id']}
                        name={project['name']}
                        number={project['number']}
                        category={project['category']['name']}
                        handleRemove={removeProject}
                        key={project['id']}
                    />
                ))}

                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </div>
        </div>
    )
}