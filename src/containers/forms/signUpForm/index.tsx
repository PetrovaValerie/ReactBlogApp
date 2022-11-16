import React, {useContext, useEffect, useState} from 'react';
import {Container, Form, Text} from "../formBasics/style";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/style";
import {ThemeContext} from "../../../components/theme/themeProvider";
import {SignUpBtn} from "../formBasics/style";
import {InputLine} from "../formBasics/input";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../../redux/authReducer/action";
import {SignUpError} from "./style";

type SignUpFormProps = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export const SignUpForm = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [value, setValue] = useState<SignUpFormProps>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [passMatch, setPassMatch] = useState(true);
    useEffect(() => validatePassword());

    const dispatch = useDispatch();

    //handleForm
    const dataForm = () => {
        dispatch(signUpRequest(value));
    }

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

    const validatePassword = () => {
        (value.password === value.confirmPassword) ? setPassMatch(true) : setPassMatch(false);
    }

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
                            name={'username'}
                            type={'text'}
                            placeholder={'Your name'}
                            value={value.username}
                            error
                            onChange={handleChange}
                            aria-required="true" />
                        <InputLine
                            label={'Email'}
                            name={'email'}
                            type={'email'}
                            placeholder={'Your email'}
                            value={value.email}
                            error
                            onChange={handleChange}
                            aria-required="true" />
                        <InputLine
                            label={'Password'}
                            name={'password'}
                            type={'password'}
                            placeholder={'Your password'}
                            value={value.password}
                            error
                            onChange={handleChange}
                            aria-required="true" />
                        <InputLine
                            label={'Confirm password'}
                            name={'confirmPassword'}
                            type={'password'}
                            placeholder={'Confirm password'}
                            value={value.confirmPassword}
                            error
                            onChange={handleChange}
                            aria-required={true} />
                            {/*// aria-invalid={passMatch ? true : false} */}
                            {/*// className={`form-control {passMatch ? "" : "input-error-border"}}*/}

                        <SignUpError>
                            {value.password !== value.confirmPassword ? "" : ""}
                        </SignUpError>
                        <SignUpError className="input-error">
                            {passMatch ? "" : "Error: Passwords do not match"}
                        </SignUpError>

                        <SignUpBtn onClick={dataForm}>
                            Sign Up
                        </SignUpBtn>
                        <Text>Don't have an account? <a>Sign Up</a></Text>
                        <BackBtn to="/success">Success reg</BackBtn>
                    </Form>
                </Container>
            </>
    )};