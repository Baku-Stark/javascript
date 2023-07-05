import { Routes, Route } from 'react-router-dom'

// IMPORTAÇÕES [pages]
import { Home } from '../pages/Home'
import { Company } from '../pages/Company'
import { Contact } from '../pages/Contact'
import { NewProject } from '../pages/NewProject'

import styles from './Container.module.css'

export function Container(){
    return(
        <div className={`${styles.container} min-height`}>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/company'
                    element={<Company/>}
                />
                <Route
                    path='/contact'
                    element={<Contact/>}
                />
                <Route
                    path='/new_project'
                    element={<NewProject/>}
                />
            </Routes>
        </div>
    )
}