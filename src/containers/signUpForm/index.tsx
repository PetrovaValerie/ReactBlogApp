import React from 'react';
import {Container, Button, Form, Input, Text, InputTitle} from "./../signInForm/signInFormStyle";
import {TopWrap, BackBtn, WebTitle} from "../../components/tabs/tabsStyle";

export const SignUpForm = () => {

    return (
        <>
            <TopWrap>
                <BackBtn to="/homepage">
                    Back to home
                </BackBtn>
                <WebTitle>Sign Up</WebTitle>
            </TopWrap>
            <Container>
                <Form>
                    <div>
                        <InputTitle>Name</InputTitle>
                        <Input
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <InputTitle>Email</InputTitle>
                        <Input
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <InputTitle>Password</InputTitle>
                        <Input
                            placeholder="Your password"
                        />
                    </div>
                    <div>
                        <InputTitle>Confirm password</InputTitle>
                        <Input
                            placeholder="Confirm password"
                        />
                    </div>
                    <Button>
                        Sign Up
                    </Button>
                    <Text>Don't have an account? <a>Sign Up</a></Text>

                    <BackBtn to="/success">Success reg</BackBtn>
                </Form>
            </Container>
        </>
        )
    }
