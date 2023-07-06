import { Input } from '../components/form/Input'
import { Select } from '../components/form/Select'
import { SubmitButton } from '../components/form/SubmitButton'

import styles from '../assets/css/ProjectForm.module.css'

export function ProjectForm({btnText}:any){
    return(
        <form method="post" className={styles.project_form}>
            <fieldset>
                <legend>Preencha os campos</legend>
                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                />

                <Input
                    type="number"
                    text="Orçamento"
                    name="number"
                    placeholder="Insira o orçamento total"
                />

                <Select
                    name="category_id"
                    text="Selecione a categoria"
                />

                <SubmitButton
                    text={btnText}
                />
            </fieldset>
        </form>
    )
}