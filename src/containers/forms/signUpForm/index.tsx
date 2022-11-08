import React, {useContext, useState} from 'react';
import {Container, Form, Text} from "../formBasics/style";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/style";
import {ThemeContext} from "../../../components/themeProvider";
import {SignUpBtn} from "../formBasics/style";
import {InputLine} from "../formBasics/input";

type SignUpFormProps = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export const SignUpForm = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [value, setValue] = useState<SignUpFormProps>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
// в useState поступят все значения формы
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setValue((prevState: SignUpFormProps) => {
            return {
            ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    };
        return (
            <>
                <TopWrap className={`${darkMode ? "theme-dark" : ""}`}>
                    <BackBtn to="/">
                        Back to home
                    </BackBtn>
                    <WebTitle>Sign Up</WebTitle>
                </TopWrap>
                <Container>
                    <Form className={`${darkMode ? "theme-dark" : ""}`}>
                        <InputLine
                            label={'Name'}
                            name={'name'}
                            type={'text'}
                            placeholder={'Your name'}
                            value={value.name}
                            error
                            onChange={handleChange} />
                        <InputLine
                            label={'Email'}
                            name={'email'}
                            type={'email'}
                            placeholder={'Your email'}
                            value={value.email}
                            error
                            onChange={handleChange} />
                        <InputLine
                            label={'Password'}
                            name={'password'}
                            type={'password'}
                            placeholder={'Your password'}
                            value={value.password}
                            error
                            onChange={handleChange} />
                        <InputLine
                            label={'Confirm password'}
                            name={'confirmPassword'}
                            type={'password'}
                            placeholder={'Confirm password'}
                            value={value.confirmPassword}
                            error
                            onChange={handleChange} />
                        <SignUpBtn>
                            Sign Up
                        </SignUpBtn>
                        <Text>Don't have an account? <a>Sign Up</a></Text>
                        <BackBtn to="/success">Success reg</BackBtn>
                    </Form>
                </Container>
            </>
    )};