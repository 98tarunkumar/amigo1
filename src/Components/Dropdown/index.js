import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillCaretDown, AiOutlineBars } from 'react-icons/ai'
import {BsChevronBarDown, BsChevronBarUp} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import './Dropdown.css'

const DropDownContainer = styled.div`
    background:#000;
    width:300px;
    height:100px;
    top:20%;
    right:70%;
    position:absolute;    
    display:flex;
    justify-content:flex-end;
    align-items:center;
    border-radius:10px;
    
`

const Droptxt = styled.h1`
    text-align:center;
    //color:white;
    margin-right:40px;
    color:${({selected})=>(selected?'black':'white')}
  
`

const DropIcon = styled.div`
    margin-right:17px;
    margin-top:5px;

`
const DropActive = styled.div`
    border: 2px solid black;
    height: 400px;
    width: 300px;
    color:red;
    top:32%;
    position:absolute;
    right:70%;
    background:#696969;
    display:grid;
    grid-template-rows:1fr 1fr 1fr 1fr;
    //grid-gap:10px;
    border-radius:10px;


`
const DropElement=styled.div`
    width:98%px;
    height:98%px;
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    justify-content: baseline;
    background:black;
    margin:3px 3px;
    border-radius:10px;
    align-items:center;
    justify-content:center;
  
`
const DropDeactive = styled.div`
    border: 2px solid red;
    height: 100px;
    width: 200px;
    opacity: 0;
    color:green;
    
`

const DropTuto = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
        setSelected(!selected)
        console.log(1 + isOpen, selected)
    }


    return (
        <>
            <IconContext.Provider
                value={{ color: 'white', size: '40px' }}
            >
                <DropDownContainer>
                    
                    <Droptxt className={isOpen ? 'aq' : 'ar'} >
                        Dropdown
                    </Droptxt>
                    <DropIcon>
                        {
                            (selected===true)&& <BsChevronBarUp  onClick={toggle} />
                        }
                        {
                            (selected===false)&& <BsChevronBarDown  onClick={toggle} />
                        }
                        
                    </DropIcon>

                </DropDownContainer>
                {
                    (selected === false) && <DropDeactive>
                        
                    </DropDeactive>
                }
                {
                    (selected === true) && <DropActive >
                        <DropElement>
                            <Droptxt>Op1</Droptxt>
                        </DropElement>
                        <DropElement>
                            <Droptxt>Op2</Droptxt>
                        </DropElement>
                        <DropElement>
                            <Droptxt>Op3</Droptxt>
                        </DropElement>
                        <DropElement>
                            <Droptxt>Op4</Droptxt>
                        </DropElement>
                    </DropActive>
                }
            </IconContext.Provider>
        </>
    )
}

export default DropTuto
