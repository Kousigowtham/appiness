import styled from "styled-components/macro";

export const Container=styled.div`
display:flex;
background: rgba(0,0,0,0.75);
margin:auto;
padding:2rem 2rem;
width:80%;
@media(max-width:900px){
    width:80%;
    overflow-x:scroll;
}
`;

export const Base=styled.table`
border-collapse: collapse;
width: 100%;
color:white;
`;

export const Row=styled.tr`

line-height:3rem;
&:nth-child(even) {
    background-color: #f2f2f2;
    color:black;
}
`;

export const Head=styled.th`
    font-size: 1.25rem;
    font-weight:800;
    text-align: left;
`;

export const NonHead=styled.td`
text-align: left;
`;
