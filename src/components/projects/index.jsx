
import styled from 'styled-components'



export const ProjectContainer = styled.section`

    color:white;
    padding: 0 2em;
    & .text{
        /* padding-left: 10%; */
    }
    & a{
        color:#ebfcfb;  
        display: contents;
    }

    & h4{
        color:#797575;
        font-size: 1.5em;
        text-transform: uppercase;
        letter-spacing: .2em;
        font-family: 'Calibre ligth';
        margin-bottom: 0;

    }
    & h1{
        color:#ebfcfb;  
        font-size: 2.8em;
        text-transform: capitalize;
        margin-top: 0;
    }

    & .project{
        display: grid;
        grid-template-columns:repeat(auto-fill,minmax(25em,35em));
        grid-gap: 1rem;
        justify-content: center;
        padding: 0 2.5em;

        &__card{
            display: flex;
            flex-direction: column;
            gap:2em;
            padding: 3.5em 3em;
            background-image: linear-gradient(to right bottom, #0f1020, #b095ff);
            border-radius: 1em;
        }

        & .links{
            align-self: flex-end;
            margin-bottom: 6em;
        }

        & h1{
            font-size: 4.5em;
            margin-bottom: 0;
        }
        & h2{
            margin-top: 0;
            font-size: 3em;
            text-transform: capitalize;
        }
        & .title, & .technologies{
            align-self: start;
            animation: jump 6s infinite ;
        }
        & .technologies{
            font-size: 1.3em;
        }
    }
    /* RESPONSIVE */
    @media (max-width: 410px) {
            /* & .text{
                padding-left: 0;
                & h4{
                    
                }
            } */
            & .project{
                grid-template-columns:repeat(auto-fill,minmax(25em,40em));
            }
        }
    /* Animation */
    @keyframes jump {
            0% {
                transform: translateY(0);
            }
            10% {
                transform: translateY(0);
            }
            20% {
                transform: translateY(0);
            }
            30% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-1em);
            }
            60% {
                transform: translateY(0);
            }
            70% {
                transform: translateY(0);
            }
            80% {
                transform: translateY(0);
            }
            90% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(0);
            }
    }
`