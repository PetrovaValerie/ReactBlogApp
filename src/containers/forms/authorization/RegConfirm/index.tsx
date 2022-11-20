import React from 'react';
import {Container, Form} from "../../signInForm/signInInput/style";
import {TopWrap, BackBtn, WebTitle} from "../../../../components/tabs/style";
import {ConfirmText, SuccessButton} from "./style";

export const RegConfirm = () => {
    return (
        <>
            <TopWrap>
                <BackBtn to="/">
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
                    <SuccessButton to="/">
                        Go to home
                    </SuccessButton>
                </Form>
            </Container>
        </>
    )
}
