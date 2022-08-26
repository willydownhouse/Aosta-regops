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
        /* color: #111; */
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
        margin-bottom: .5rem;
    }

    h5{
        font-size: 2rem;
        margin-bottom: .5rem;
    }

    h6{
        font-size: 1.6rem;
        margin-right: 1rem;
        margin-bottom: .5rem;
    }

    p{
        font-size: 1.6rem;
        /* margin-right: 1rem; */
        
    }

    label{
        font-size: 1.6rem;
        margin-right: 1rem;
    }

    pre{
        font-size: 1.6rem;
    }

    div .grid-top-row{
        grid-column: 1/4;

        @media(max-width: 600px){
            grid-column: 1/2;
        }
    }

    div .snow-tested{
        grid-column: 1/2;
        grid-row: 8/9;
        

        @media(max-width: 600px){
            grid-column: 1/2;
        }
    }

    div .result{
        grid-column: 2/3;
        grid-row: 8/9;
        

        @media(max-width: 600px){
            grid-column: 1/2;
            grid-row: 9/10
            
        }
    }

    div .add-test-btn{
        grid-column: 3/4;
        grid-row: 8/9;

        @media(max-width: 600px){
            grid-column: 1/2;
            grid-row: 10/11;
        }
    }

    div .description{
        grid-column: 1/4;
        grid-row: 9/10;

        @media(max-width: 600px){
            grid-column: 1/2;
            grid-row: auto;
        }
    }

    

    div .photo-inputs{
        grid-column: 1/4;
        grid-row: 10/11;

        @media(max-width: 600px){
            grid-column: 1/2;
            grid-row: auto
            
        }
    }

    div .ob_details_title{
        grid-column: 1/3;

        @media(max-width: 600px){
           margin-bottom: 2rem;
            
        }
        
        
    }

    div .ob_details_description{
        grid-column: 1/3;
        margin-bottom: 1rem;

        @media(max-width: 600px){
           margin-top: 3rem;
          
            
        }

    }

    div .ob_details_snow_tests{
        @media(max-width: 600px){
            grid-column: 1/3;
            grid-row: 8/9;
            grid-row: auto;
            margin-top: 1rem;
            
            
        }
        
    }

    input{
        margin-right: 1rem;
    }
`;
