import styled from 'styled-components/macro'

export const Container=styled.div`
    display:flex;
    flex-direction:column;
    background: rgba(0,0,0,0.75);
    width: 350px;
    height:400px;
    margin:auto;
    padding: 1rem 2rem;
    box-sizing:border-box;
`;

export const Base=styled.form`
    display:flex;
    flex-direction:column;

`;

export const Title=styled.h1`
    color:white;
    font-size:26px;
    font-weight: bold;

    @media(max-screen:600px){
        font-size:18px;
    }
`;

export const Input=styled.input`
    height:40px;
    border:0;
    border-radius:5px;
    margin-bottom:20px;
    padding:5px 10px;
    line-height:20px;
    font-size:1.1rem;
    background:#5c5656;
    color:white;
`;

export const Error=styled.div`
    color:white;
    padding: 1rem 0.5rem;
    margin-bottom: 20px; 
    height:fit-content;
    background:#faa823;
    border-radius:5px;
`;

export const Submit=styled.button`
color: white;
padding: 1rem 1.5rem;
font-size:1.1rem;
background: #eb282b;
border:0;
&:hover{
    background: #fc142b;
    cursor:pointer;
}

&:disabled{
    opacity:0.5;
}

`;