import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
        color: #111;
    }

    h1{
        font-size: 5rem;
    }

    h2{
        font-size: 4rem;
    }

    h3{
        font-size: 3rem;
    }

    h4{
        font-size: 2.5rem;
    }

    h5{
        font-size: 2rem;
    }

    h6{
        font-size: 1.6rem;
    }

    p{
        font-size: 1.6rem;
    }
`;
