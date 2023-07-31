import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'
import { useAuth } from '../context/useAuth'

import styles from './_pages.module.css'

export function Home(){
    const navigate = useNavigate()

    const {signout}: any = useAuth()

    return(
        <div className={styles.container_home}>
            <Button
                Text="Sair"
                onClick={() => [signout(), navigate('/')]}
            >
                Sair
            </Button>
        </div>
    )
}