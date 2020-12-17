import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button =styled(Link)`
    text-decoration:none;
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    font-size: ${({fontbig})=>(fontbig?'20px':'16px')};
    color: ${({dark}) =>(dark?'#010606':'#fff')};
    padding: ${({big}) =>(big?'14px 48px':'12px 30px')};
    background: ${({primary})=> (primary?'#01bf71':'#010606')};

    &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary?'#fff':'#01bf71')};
    }
`
