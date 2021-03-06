import React from 'react'
import { HeroContainer } from './index';
import { Test } from '../../assets/img/Test';
import { Name } from '../../assets/img/Name';
import Zoom from 'react-reveal/Zoom';



export const Hero = () => {
    return (
        <HeroContainer>
            <Zoom effect="fadeInUp">
                <div className="hero__left">
                    <p className="hero__left__greeting">hi π , i'm</p>
                    <div className="hero__left__box">
                        <Name/>
                    </div>
                    <h2 className="hero__left__title">DEVELOPER + DESIGNER π¨βπ»</h2>
                    <p className="hero__left__description">
                        Iβm a full-stack developer minded design 
                        <br />
                        based in Lima, PerΓΊ π΅πͺ.
                    </p>
                    <a className="hero__left__button" href="https://www.linkedin.com/in/kerwin-sandoval/">hire me</a>
                </div>
                <div className="hero__right">
                    <Test/>
                </div>
            </Zoom>
        </HeroContainer>
    )
}
