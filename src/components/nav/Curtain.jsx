import React from 'react'
import { MenuName } from '../../assets/img/MenuName';
import { MenuIcon } from '../../assets/img/MenuIcon';
import { GithubIcon } from '../../assets/img/GithubIcon';
import { Twitter } from '../../assets/img/Twitter';
import { LinkedIn } from '../../assets/img/LinkedIn';
import  kerwinCV  from '../../assets/kerwinCV.pdf';
import {CurtainStyle} from './index'


export const Curtain = ({action}) => {

    const fadeOut = () => action()

    return (
            <CurtainStyle>
                <div className="icons">
                    <span>
                        <MenuName/>
                        <h1>On the web</h1>
                    </span>
                    <div onClick={fadeOut}>
                        <MenuIcon/>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="socials">
                            <a href="https://github.com/Kerwin-Joel"> <GithubIcon/>   </a>
                            <a href="https://www.linkedin.com/in/kerwin-sandoval/"> <LinkedIn/>   </a>
                            <a href="https://twitter.com/KerwinDev"> <Twitter/>   </a>
                        </div>
                        <a href={kerwinCV}>Resume 📗</a>
                    </div>
                    <div className="rigth">
                        <h1>Navigation</h1>
                        <ul>
                            <li onClick={fadeOut}><a href="#home">Home</a></li>
                            <li onClick={fadeOut}><a href="#proyects">Proyects</a></li>
                            <li onClick={fadeOut}><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </CurtainStyle>
    )
}
