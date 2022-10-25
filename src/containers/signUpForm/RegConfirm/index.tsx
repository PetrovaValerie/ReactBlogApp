import React from 'react';
import {Container, Form} from "./../../signInForm/signInFormStyle";
import {TopWrap, BackBtn, WebTitle} from "../../../components/tabs/tabsStyle";
import {ConfirmText, SuccessButton} from "./regConfirmStyle";

export const RegConfirm = () => {

    return (
        <>
            <TopWrap>
                <BackBtn to="/homepage">
                    Back to home
                </BackBtn>
                <WebTitle>Success</WebTitle>
            </TopWrap>
            <Container>
                <Form>
                    <ConfirmText>
                        Email confirmed. <br></br>
                        Your registration is now completed.
                    </ConfirmText>
                    <SuccessButton to="/homepage">
                        Go to home
                    </SuccessButton>
                </Form>
            </Container>
        </>
        )
    }
