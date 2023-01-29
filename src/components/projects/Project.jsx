import React from 'react'
import { ProjectContainer } from './index';
import { GithubIcon } from '../../assets/img/GithubIcon';
// import Zoom from 'react-reveal/Zoom';


export const Project = () => {
    return (
        <ProjectContainer id="proyects">
            <div className="text">
                <h4>features projects —</h4>
                <h1>stuff i’ve worked on 📁</h1>
            </div>
            <div className="project">
            {/* <Zoom> */}
                <div className="project__card">
                    <div className="links">
                        <GithubIcon/>
                    </div>
                    <a href="https://www.tuttitienda.com/">
                        <div className="title">
                            <h1>tuttitienda</h1>
                            <h2>e-Commerce</h2>
                        </div>
                        <div className="technologies">
                            REACTJS &nbsp; NODEJS &nbsp; API/SHOPIFY &nbsp; JAVASCRIPT &nbsp; MERCADO PAGO
                        </div>
                    </a>
                </div>
            {/* </Zoom>
            <Zoom> */}
                <div className="project__card">
                    <a href="https://github.com/Kerwin-Joel/calendar-React">
                        <div className="links">
                            <GithubIcon/>
                        </div>
                    </a>
                    <a href="http://calenda.herokuapp.com/login">
                        <div className="title">
                            <h1>Calendar </h1>
                            <h2>App Web</h2>
                        </div>
                        <div className="technologies">
                            REACTJS &nbsp; NODEJS &nbsp; MONGODB &nbsp; HTML &nbsp; CSS
                        </div>
                    </a>
                </div>
            {/* </Zoom>
            <Zoom> */}
                <div className="project__card">
                    <a href="https://github.com/Kerwin-Joel/NatoursNodejs">
                        <div className="links">
                            <GithubIcon/>
                        </div>
                    </a>
                    <a href="https://kerwin-natours.herokuapp.com/">
                        <div className="title">
                            <h1>Natours</h1>
                            <h2>API REST and Web</h2>
                        </div>
                        <div className="technologies">
                            NODEJS &nbsp; EXPRESS &nbsp; MONGODB &nbsp; PUG &nbsp; STRIPE
                        </div>
                    </a>
                </div>
            {/* </Zoom> */}
            {/* <Zoom> */}
                <div className="project__card">
                    <a href="https://github.com/Kerwin-Joel/naviPage">
                        <div className="links">
                            <GithubIcon/>
                        </div>
                    </a>
                    <a href="https://kerwin-joel.github.io/naviPage/">
                        <div className="title">
                            <h1>Christmas Gift</h1>
                            <h2>e-Commerce</h2>
                        </div>  
                        <div className="technologies">
                            HTML/CSS &nbsp; JS &nbsp; Responsive
                        </div>
                    </a>
                </div>
            {/* </Zoom> */}
            {/* <Zoom> */}
                <div className="project__card">
                    <a href="https://github.com/Kerwin-Joel/Natours-turism">
                        <div className="links">
                            <GithubIcon/>
                        </div>
                    </a>
                    <a href="https://kerwin-joel.github.io/Natours-turism/">
                        <div className="title">
                            <h1>Turism</h1>
                            <h2>Landing</h2>
                        </div> 
                        <div className="technologies">
                            HTML/CSS &nbsp; JS &nbsp; Responsive &nbsp; SASS &nbsp; React
                        </div>
                    </a>
                </div>
            {/* </Zoom> */}
            </div>
        </ProjectContainer>
    )
}
