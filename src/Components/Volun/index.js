import React from 'react'
import styled from 'styled-components'
import { Cont, FormH1, User, UserInp } from '../Send/SendElements'
import { Container, Form, FormButton, FormContent, Icon } from '../SignIn/SignInElements'
import { FromWrap } from '../SignUp/SignUpElements'

const Volun = () => {
    return (
        <>
          <Container>
              <FromWrap>
                  <Icon style={{marginTop:'14px', position:'absolute'}}>
                      AMIGO
                  </Icon>
                  <FormContent>
                      <Form>
                          <FormH1>Step up and Help!!</FormH1>
                          <FormH1 style={{fontSize:'20px',marginTop:'-20px'}}>Be a Volunteer!!</FormH1>
                          <Cont>
                              <User>Name</User>
                              <UserInp></UserInp>
                              <User>Email</User>
                              <UserInp></UserInp>
                          </Cont>
                          <Cont>
                              <User>Phone</User>
                              <UserInp type='numeric'></UserInp>
                              <User>State</User>
                              <UserInp></UserInp>
                          </Cont>
                          <User style={{marginBottom:'-10px',left:'10px'}}>Availability Date:</User><br/>
                          <Datesec>
                              
                              <User>From</User>
                                <Ddate type='date'></Ddate>
                              <User>To</User>
                              <Ddate type='date'></Ddate>
                          </Datesec>
                          <Addres>
                          <User>Address:</User>
                            <AddrInp type='add'>
                                
                            </AddrInp>
                          </Addres>
                          <FormButton type='submit' style={{marginTop:'20px'}}>Submit</FormButton>
                      </Form>
                  </FormContent>
              </FromWrap>
          </Container>

        </>
    )
}

const Addres=styled.div`
    margin-top:8px;
    
    
`
const AddrInp=styled.input`
    margin-top:-4px;
    width:100%;
    height:50px;
`

const Datesec=styled.div`
  
    display:flex;
    flex-direction:row;
    justify-content:center;
`
const Ddate=styled.input`
    margin-left:20px;
    width:35%;
    align-items:center;
   margin-right:7px;
    justify-content:center;
    color:white;
    background:inherit;
    border:1px solid white;
    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`

export default Volun
