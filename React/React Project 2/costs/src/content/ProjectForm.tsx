import { useEffect, useState } from 'react'

import { Input } from '../components/form/Input'
import { Select } from '../components/form/Select'
import { SubmitButton } from '../components/form/SubmitButton'

import styles from '../assets/css/ProjectForm.module.css'

export function ProjectForm({handleSubmit, btnText, projectData}:any){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    const submit = (e: any) => {
        e.preventDefault()
        handleSubmit(project)
        // console.log(project)
    }

    useEffect(() => {
        document.title = "New Project"
        
        fetch("http://localhost:5000/categories", {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function handleChange(e: any){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e: any){
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return(
        <form onSubmit={submit} method="post" className={styles.project_form}>
            <fieldset>
                <legend>Preencha os campos</legend>
                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                    handleOnChange = {handleChange}
                    value={project.name ? project.name : ''}
                />

                <Input
                    type="number"
                    text="Orçamento"
                    name="number"
                    placeholder="Insira o orçamento total"
                    handleOnChange = {handleChange}
                    value={project.number ? project.number : ''}
                />

                <Select
                    name="category_id"
                    text="Selecione a categoria"
                    options={categories}
                    handleOnChange = {handleCategory}
                    value={project.category ? project.category.id : ''}
                />

                <SubmitButton
                    text={btnText}
                />
            </fieldset>
        </form>
    )
}