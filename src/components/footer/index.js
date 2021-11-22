
import styled from 'styled-components'



export const FooterContainer = styled.footer`
    padding: 0 2em;
    margin-top: 20em;
    & h4{
        color: #797575;
        font-size: 1.5em;
        text-transform: uppercase;
        letter-spacing: .2em;
        font-family: 'Calibre ligth';
        margin-bottom: 0;
    }
    & h2{
        color:#ebfcfb;
        font-size: 2.8em;
        text-transform: capitalize;
        margin-top: 0;
    }

    
`

export const FooterItem = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(25em,35em));
    grid-gap: 1rem;
    justify-content: center;
    padding: 0 2.5em;
    color:#797575;


    
    
    & .item{
        border:1px solid #797575;
        border-bottom: 0;
        transition: all 0.5s ease-in-out;

        &::after{
            content: '';
            background-color: #b095ff;
            width: 100%;
            height: .5em;
            display: block;
        }
        &:hover{
        transform: scale(1.1);
    }
    }
    & a{
        color:#797575;
        display: flex;
        justify-content: space-between;
        font-family: 'Calibre bold';
        font-size: 2em;
        padding: 1em;
    }
    & span:first-child{
        align-self: end;
        margin-bottom: -1em;
    }
    & svg{
            width: 25px;
            height: 20px;
        }
    & path{
        fill:#797575;
    }
    & p{
        text-transform: uppercase;
        font-family: 'Calibre bold';
        letter-spacing: .2em;
        font-size: 1.3em;
    }
`
