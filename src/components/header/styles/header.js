import styled from "styled-components/macro";
import {Link as ReactRouterLink} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height:100vh;
    min-width:100%;
    background: url(${({src})=>src}) no-repeat center scroll;
    background-size: cover;
`;

export const Base = styled.div`
    display:flex;
    max-width:100%;
    justify-content:space-between;
    margin: 1.5rem 1rem;
`;

export const Logo = styled.img`

        height:40px;
        width:100px;

        &:hover{
            cursor:pointer;
        }
`;

export const Button = styled(ReactRouterLink)`
    color: white;
    padding: 0.5rem 1.5rem;
    font-size:1.1rem;
    background: #eb282b;
    text-decoration:none;
    &:hover{
        background: #fc142b;
        cursor:pointer;
    }
`;
