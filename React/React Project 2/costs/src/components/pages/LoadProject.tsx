import { useLocation } from 'react-router-dom'

import { Message } from '../layouts/Message'

import styles from '../../assets/css/LoadProject.module.css'

export function LoadProject(){
    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.load_project_container}>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    )
}