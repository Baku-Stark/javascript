import { Link } from 'react-router-dom'

import '../assets/css/Header.css'

// IMPORTAÇÕES [img]
import logo from '../assets/img/coin.png'

export function Header(){
    return(
        <div className='header'>
            <nav>
                <div className='title-content'>
                    <h1>C O S T S</h1>
                </div>
                <div className='icon-content'>
                    <img src={logo} alt="COIN" />
                </div>
                <div className='link-content'>
                    <ul>
                         <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/company"}>Company</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/new_project"}>New Project</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}