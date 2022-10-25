import React, {FormEventHandler, useState} from 'react';
import {CustomInput} from "../../components/main/customInput";
import {Container, Button, Form, Input, Text, InputTitle, ForgotPassOption} from "./signInFormStyle";
import {TopWrap, BackBtn, WebTitle} from "../../components/tabs/tabsStyle";
import {NavLink} from "react-router-dom";

export const SignInForm = () => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        required: 'boolean',
        type: '',
    })
    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     console.log(value);
    // }
    // // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const handleChange = (e: any) => {
    //     console.log(e.target.value);
    // }
    return (
        <>
                <TopWrap>
                    <BackBtn to="/homepage">
                        Back to home
                    </BackBtn>
                    <WebTitle>Sign In</WebTitle>
                </TopWrap>

            <Container>
                {/*<Form background="#222B36" borderRadius="10px" onSubmit={handleSubmit}>*/}
                <Form>
                    <InputTitle>Email</InputTitle>
                    <Input
                        // required
                        // icon="email"
                        // type="email"
                        // name="email"
                        placeholder="Your email"
                        // value={email}
                        // errors={errors}
                        // onChange={handleChange}
                    />
                    <InputTitle>Password</InputTitle>
                    <Input
                        // required
                        // icon="password"
                        // type="password"
                        // name="password"
                        placeholder="Your password"
                        // value={password}
                        // errors={errors}
                        // onChange={handleChange}
                    />
                    {/*<Button type={"submit"}>*/}
                    <ForgotPassOption>Forgot password?</ForgotPassOption>
                    <Button>
                        Sign in
                    </Button>
                    <Text>Don't have an account? <a>Sign Up</a></Text>
                </Form>
            </Container>
        {/*    <form>*/}
        {/*    <CustomInput*/}
        {/*        type="email"*/}
        {/*        placeholder={"Введите текст"}*/}
        {/*        name="email"*/}
        {/*        value={value.email}*/}
        {/*        onChange={handleChange} />*/}

        {/*    <CustomInput*/}
        {/*        type="password"*/}
        {/*        placeholder={"Введите пароль"}*/}
        {/*        name="email"*/}
        {/*        value={value.password}*/}
        {/*        onChange={handleChange} />*/}

        {/*    <button onCLick={handleSubmit} type={"submit"}>Submit</button>*/}
        {/*</form>*/}
        </>
        )
    }
