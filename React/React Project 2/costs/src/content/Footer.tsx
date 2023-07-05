import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import '../assets/css/Footer.css'

export function Footer(){
    return(
        <div className="footer">
            <ul className='social-list'>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className='copy-right'>
                <span>Costs</span> &copy; 2023
            </p>
        </div>
    )
}