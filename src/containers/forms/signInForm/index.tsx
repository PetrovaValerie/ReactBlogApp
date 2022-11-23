import React, {useState} from 'react';
import {Container, Form, Text, ForgotPassOption} from "./signInInput/style";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/style";
import {SignInBtn} from "./signInInput/style";
import {InputLine} from "./signInInput/input";
import {SignInFormProps} from "../../../others/types/formsTypes";
import {useDispatch} from "react-redux";
import {signInRequest} from "../../../others/redux/store/authReducer/action";

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
    const dispatch = useDispatch();

    const DataForm = () => {
        console.log(value)
        const isValid= true;
        if (isValid) {
            dispatch(signInRequest(value))
        }
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
                        autoComplete={"current-password"}
                    />
                    <InputLine
                        label={"Password"}
                        name={"password"}
                        type={"password"}
                        placeholder={"Your password"}
                        value={value.password}
                        onChange={handleSubmit}
                        error
                        autoComplete={"current-password"}
                    />
                    <ForgotPassOption>Forgot password?</ForgotPassOption>
                    {/*<SignInBtn onClick={handleSubmit}>*/}
                    <SignInBtn onClick={DataForm} >
                        Sign in
                    </SignInBtn>
                    <Text>Don't have an account? <a>Sign Up</a></Text>
                </Form>
            </Container>
        </>
    )};
