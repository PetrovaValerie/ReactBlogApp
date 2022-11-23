import React, {useEffect, useState} from 'react';
import {Container, Form, Text} from "../signInForm/signInInput/style";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/style";
import {SignUpBtn} from "../signInForm/signInInput/style";
import {InputLine} from "../signInForm/signInInput/input";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../../others/redux/store/authReducer/action";
import {SignUpError} from "./style";
import {SignUpFormProps} from "../../../others/types/formsTypes";
import {useAuthSelector} from "../../../others/redux/store/rootReducer";

export const SignUpForm = () => {

    const [value, setValue] = useState<SignUpFormProps>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [passMatch, setPassMatch] = useState(true);
    useEffect(() => validatePassword());

    const dispatch = useDispatch();
    // const error = useAuthSelector(state => state.authReducer.error)
    // console.log('email' in error);

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
            <TopWrap>
                <BackBtn to="/">
                    Back to home
                </BackBtn>
                <WebTitle>Sign Up</WebTitle>
            </TopWrap>
            <Container>
                <Form>
                    <InputLine
                        label={'Name'}
                        name={'username'}
                        type={'text'}
                        placeholder={'Your name'}
                        value={value.username}
                        error
                        // error={'username' in error}
                        autoComplete={"current-password"}
                        onChange={handleChange}
                        aria-required="true" />
                    <InputLine
                        label={'Email'}
                        name={'email'}
                        type={'email'}
                        placeholder={'Your email'}
                        value={value.email}
                        error
                        // error={'email' in error}
                        autoComplete={"current-password"}
                        onChange={handleChange}
                        aria-required="true" />
                    <InputLine
                        label={'Password'}
                        name={'password'}
                        type={'password'}
                        placeholder={'Your password'}
                        value={value.password}
                        error
                        // error={'password' in error}
                        autoComplete={"current-password"}
                        onChange={handleChange}
                        aria-required="true" />
                    <InputLine
                        label={'Confirm password'}
                        name={'confirmPassword'}
                        type={'password'}
                        placeholder={'Confirm password'}
                        value={value.confirmPassword}
                        error
                        // error={'confirmPassword' in error}
                        autoComplete={"current-password"}
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