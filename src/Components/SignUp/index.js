import React from 'react'
import { Form, FormButton, FormContent, FormH1, FormInput, FormLabel } from '../SignIn/SignInElements'
import { Container, FromWrap, Icon } from './SignUpElements'

const SignUp = () => {
    return (
        <>
            <Container>
                <FromWrap>
                    <Icon to='/'>
                        AMIGO
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign Up</FormH1>
                            <FormLabel htmlFor='for'>Username:</FormLabel>
                            <FormInput type='username' required></FormInput>
                            <FormLabel htmlFor='for'>Password:</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormLabel htmlFor='for'>Re-enter Password:</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton type='submit'><a href='/' style={{color:'white'}}>Get Started</a></FormButton>
                        </Form>
                    </FormContent>
                </FromWrap>
            </Container>  
        </>
    )
}

export default SignUp
