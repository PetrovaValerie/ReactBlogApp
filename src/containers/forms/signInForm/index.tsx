import React, {useContext, useState} from 'react';
import {Container, Form, Text, ForgotPassOption} from "../formBasics/style";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/style";
import {SignInBtn} from "../formBasics/style";
import {InputLine} from "../formBasics/input";
import {SignInFormProps} from "../../../others/types/formsTypes";

export const SignInForm = () => {

    const [value, setValue] = useState<SignInFormProps>({
        email: '',
        password: ''
    });

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setValue((prevState: SignInFormProps) => {
            return (
                {
                    ...prevState,
                    [event.target.name]: event.target.value,
                })
        })
    }
    return (
        <>
            <TopWrap>
                <BackBtn to="/">
                    Back to home
                </BackBtn>
                <WebTitle>
                    Sign In
                </WebTitle>
            </TopWrap>
            <Container>
                <Form>
                    <InputLine
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        placeholder={"Your email"}
                        value={value.email}
                        onChange={handleSubmit}
                        error
                    />
                    <InputLine
                        label={"Password"}
                        name={"password"}
                        type={"password"}
                        placeholder={"Your password"}
                        value={value.password}
                        onChange={handleSubmit}
                        error
                    />
                    <ForgotPassOption>Forgot password?</ForgotPassOption>
                    <SignInBtn>
                        Sign in
                    </SignInBtn>
                    <Text>Don't have an account? <a>Sign Up</a></Text>
                </Form>
            </Container>
        </>
    )};
