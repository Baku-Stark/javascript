import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './ProjectCard.module.css'

export function ProjectCard(
    {
        id,
        name,
        number,
        category,
        handleRemove
    }: any
){
    const remove = (e:any) =>{
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Orçamento:</span> R${number}</p>
            <p className={styles.category_text}>
                <span className={styles[category.toLowerCase()]}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/edit_project/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Remover
                </button>
            </div>
        </div>
    )
}