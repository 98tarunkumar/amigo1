import React from 'react'
import {  Icon,Container, Form, FormButton, FormContent, FormWrap } from '../SignIn/SignInElements'
// import { } from '../SignUp/SignUpElements'
import { Cont, Mark, State, User, UserInp, FormH1 } from './SendElements'
import './Send.css'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" style={{color:'white'}}>Popover right</Popover.Title>
      <Popover.Content style={{color:'white'}}>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
const Send = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon>
                      AMIGO
                  </Icon>
                  <FormContent>
                      <Form>
                        <FormH1 >Send Blessings..</FormH1>
                        <Cont>
                            <User>Name</User>
                            <UserInp></UserInp>
                            <User>Email</User>
                            <UserInp></UserInp>  
                        </Cont>
                        <Cont>
                            <User>Phone</User>
                            <UserInp></UserInp>
                            <User>State</User>
                            <UserInp></UserInp>  
                        </Cont>
                       
                            <label class="container">Clothes
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            </label>

                            <label class="container">Food
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label>

                            <label class="container">Accomodation
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label>

                            <label class="container">Medicine
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label>

                        


                        <FormButton type='submit' style={{marginTop:'20px'}}>Submit
                            {/* <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                                <Button variant="success"></Button>
                            </OverlayTrigger> */}

                        </FormButton>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>

        </>
    )
}

export default Send

