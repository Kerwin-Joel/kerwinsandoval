import React, { useState } from 'react'
import { KerwinNav } from '../../assets/img/KerwinNav'
import { NavContainer } from './index'
import { MenuIcon } from '../../assets/img/MenuIcon';
import  kerwinCV  from '../../assets/kerwinCV.pdf';
import { Curtain } from './Curtain';


export const Nav = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(!toggle)

    return (
        <NavContainer id="home">
            <div>
                <KerwinNav/>
            </div>

            <div>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#proyects">Proyects</a>
                    </li>
                    <li>
                        <a href={kerwinCV} target="_blank" rel="Curriculum vitae noreferrer">Resume</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="menu__icon" onClick={handleToggle}>
                <MenuIcon/>
            </div>

            {
                toggle && <Curtain action={handleToggle}/>
            }
        </NavContainer>
    )
}
