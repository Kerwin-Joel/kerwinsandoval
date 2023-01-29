import styled from 'styled-components'

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 2.5em;
    font-family: 'Calibre bold';
    position: fixed;
    width: 100%;
    top: 0;
    background: #0f1020;
    z-index: 100;
    padding-top: 2em;
    & ul{
        display:flex;
        list-style:none;
        margin: 0;
        padding: 0;
    }

    & a{
        padding: 5px 20px;
        color: #B095FF;
    }

    & .menu__icon{
        display: none;
    }

    /* RESPONSIVE */
    @media (max-width: 640px) {

        padding-top: 0.5em;
        & ul{
            display:none;
        }
        & .menu__icon{
            display: block;
        }
    }
`

export const CurtainStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #b095ff;
    z-index: 1;
    padding: 3em 1em;
    transition: all 0.5s ease-in-out;
    animation: fadeIn 0.5s ease-in-out;
    width: -10%;

    /* Animation */
    @keyframes fadeIn {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }


    & .icons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 2em;
        span{
            svg{
                width: 100px;
                height: 100px;
            }
            h1{
                margin: 0px;
                margin-top: -1.5em;
                font-size: .5em;
                text-transform: uppercase;
                letter-spacing: 3px;
            }
        }
        svg{
            width: 45px;
            height: 45px;
        }
    }

    & .content{
        display: grid;
        grid-template-columns:repeat(auto-fill,minmax(10em,1fr));
        grid-gap: 1rem;
        justify-content: center;
    }
    & svg{
        height: 30px;
        width: 30px;
    }
    & .left{
        margin-top: 3em;

        & path{
            fill:#0f1020
        }
        & .socials{
            display: flex;
            margin-bottom: 1em;
        }
    }
    & a{
            color:#0f1020;
    }
    & .rigth{

        & ul{
            display:block !important;

            & li{
                margin-bottom: 0.5em;
            }
        }

        & h1{
            font-size: 1em;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-family: 'Calibre ligth';
            margin-top: 3em;
        }
        & a{
            text-transform: uppercase;
            font-size: .75em;
        }
    }
`