import React from 'react'
import { Container, Form, FormH1, FormLabel, FormWrap, FormButton, FormContent, FormInput, Icon, Text } from './SignInElements'
import {Link} from 'react-router-dom'


const SignIn = () => {
    return (
        <>
           <Container>
                <FormWrap>
                    <Icon to="/">
                        AMIGO
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            
                            <FormButton type='submit'  ><a href='/' style={{color:'white'}}>Continue</a></FormButton>
                            
                            <Text>Not an account. <a href='/signup'>Create One!</a></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </>
    )
}

export default SignIn
