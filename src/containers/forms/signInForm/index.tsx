import React, {useContext, useState} from 'react';
import {Container, Form, Text, ForgotPassOption} from "../formBasics/formStyle";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/tabsStyle";
import {ThemeContext} from "../../../components/themeProvider";
import {SignInBtn} from "../formBasics/formStyle";
import {InputLine} from "../formBasics/input";

type SignInFormProps = {
    email: string,
    password: string,
}

export const SignInForm = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
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
                        <TopWrap className={`${darkMode ? "theme-dark" : ""}`}>
                            <BackBtn to="/homepage">
                                Back to home
                            </BackBtn>
                            <WebTitle>
                                Sign In
                            </WebTitle>
                        </TopWrap>

                    <Container>
                        <Form className={`${darkMode ? "theme-dark" : ""}`}>
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