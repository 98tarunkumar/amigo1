import React, { useState } from 'react'
import styled from 'styled-components'
import './Card.css'
import Img from '../../Images/svg-7.svg'

const CardContainer = styled.div`
    height:300px;
    width:200px;
    border:2px solid red;
    top:20%;
    left:30%;
    position:absolute;

    &:hover{
        //opacity:50%;
    }

`
const CardImg = styled.img`
    width:100%;
    height:90%;
`
const CardDescp = styled.div`
    bottom:0;
    width:300px;
    height:200px;
    opacity:1;
    // &:hover{
    //     opacity:1;
    // }
`


const Cards = () => {
    // const [act, setAct] = useState(0)
    // const togg = () => {
    //     setAct(!act)
    // }
    
    
    return (
        <>
            {/* <CardContainer>
                {/* <CardImg src={Img}></CardImg>  
                <CardDescp>
                    
                </CardDescp>

            </CardContainer> */}

            <div className="bo">
                
                    <div className="logo"></div>
                    <div className="navv"></div>
                
                <div className="body">
                    <div className="bb"></div>
                    <div className="cc"></div>
                </div>
                <div className="foot"></div>
            </div>
                    
        </>
    )
}

export default Cards
