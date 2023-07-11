import { useState } from 'react'

import { Input } from '../form/Input'
import { SubmitButton } from '../form/SubmitButton'

import styles from '../../assets/css/ProjectForm.module.css'

export function ServiceForm(
    {
        handleSumbit,
        btnText,
        projectData
    }: any
){
    const [service, setService] = useState({})

    function submit(e: any){
        e.preventDefault()
        projectData.services.push(service)
        handleSumbit(projectData)
    }

    function handleChange(e: any){
        setService({...service, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} method='POST'>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}