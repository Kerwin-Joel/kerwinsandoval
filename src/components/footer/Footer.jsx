import React from 'react'
import { FooterContainer, FooterItem } from './index';
import { GithubIcon } from '../../assets/img/GithubIcon';
import { LinkedIn } from '../../assets/img/LinkedIn';
import { Twitter } from '../../assets/img/Twitter';
// import Zoom from 'react-reveal/Zoom';

export const Footer = () => {

    const currentDate = new Date().getFullYear();

    return (
        <FooterContainer id="contact">
            <h4>More of my works -</h4>
            <h2>On the web 👾</h2>
            {/* <Zoom> */}
                <FooterItem>
                    <div className="item">
                        <a href="https://github.com/Kerwin-Joel">
                            <span>Github</span>
                            <span>
                                <GithubIcon/>
                            </span>
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.linkedin.com/in/kerwin-sandoval/">
                            <span>LinkedIn</span>
                            <span>
                                <LinkedIn/>
                            </span>
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/KerwinDev">
                            <span>Twitter</span>
                            <span>
                                <Twitter/>
                            </span>
                        </a>
                    </div>
                    <p> © {currentDate} Kerwin Joel</p>
                </FooterItem>
            {/* </Zoom> */}

        </FooterContainer>
    )
}
