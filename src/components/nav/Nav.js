import React, {useEffect, useState} from 'react'
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        };
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo'
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt='Netflix-logo'
            />

            <img className='nav__avatar'
            src='https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/12f6c2c5778c8b05845e39cd_rw_600.png?h=4a898c340be2ea2b184f411ebbf40675'
            alt='Netflix-logo'
            />
            
        </div>
    )
}

export default Nav
