import styled from 'styled-components'

export const HeroContainer = styled.main`
    font-size:1.6em;
    align-items: center;
    display: flex;
    height: 90vh;
    justify-content: space-around;
    padding: 0 2em;
    text-transform: uppercase;
    margin-top: 3em;


    & .hero__left{

        &__greeting{
            font-size:1.2em;
            color: #fff;
        }

        &__box{
            width: 55%;
            background: linear-gradient(141deg, #0f1020, #b095ff, #b095ff, #0f1020);
            background-size: 800% 800%;
            animation: AnimationName 10s ease infinite;
        }
        &__title{
            margin: 2em;
            font-size: 1.1rem;
            color: #b095ff;
            letter-spacing: .2em;
            margin-left: 0;
        }

        &__description{
            margin-bottom: 3.5em;
            text-transform: capitalize;
            color:#797575;
            letter-spacing: .1em;
            
        }
        &__button{
            padding: 12px 40px;
            background: #B095FF;
            border-radius: 20px;
            letter-spacing: 0.2em;
            font-size: 1em;
            font-family: 'Calibre Bold';
            color:#0f1020;
        }
    }

    & .hero__right{
        /* border:1px solid purple */
    }

    /* Animation title */
    @keyframes AnimationName {
        0%{background-position:0% 2%}
        50%{background-position:100% 99%}
        100%{background-position:0% 2%}
    }

    /* RESPONSIVE */
    @media (max-width: 590px) {
        font-size:1.2em;
        display: flex;
        flex-direction: column;
        gap: 4em;
        margin-bottom: 10em;
        
        & .hero__left{
            width:100%;
            &__box{
            }
            &__title{
                letter-spacing: .15em;
                margin: 0.5em;
                margin-left: 0;
            }
            &__description{
                margin-bottom: 4.5em;
            }
        }
    }

}`