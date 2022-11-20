import styled from 'styled-components';
import {COLORS} from '../../../../others/globalStyle/style';

export const Container = styled.div`
      margin: 0 auto;
      padding: 0;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`

export const Form = styled.form`
      margin: 0;
      padding: 2% 10% 4%;
      background-color: ${COLORS.extralightBg};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid ${COLORS.mediumBg};
`

export const Input = styled.input<{ error: boolean }>`
      margin: 0 auto;
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 56px;
      border-radius: 2px;
      background-color: ${COLORS.whiteContext};
      cursor: pointer;
      border: 2px solid ${props => props.error ? 'red' : 'grey'};
          @media (max-width: 1340px) {
            padding: 0 3%;
            width: 300px;
            height: 46px;
          }
          ::placeholder {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            color: ${COLORS.darkBg};
            @media (max-width: 1340px) {
              font-size: 13px;
              line-height: 16px;
            }
          }
          :focus {
            border: 2px solid ${COLORS.mediumBg};
            outline: none;
          }
          @media (max-width: 1340px) {
            width: 350px;
            ::placeholder {
              font-size: 14px;
              line-height: 16px;
            }
          }
`

export const InputTitle = styled.h3`
      margin: 8% 0 2%;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      color: ${COLORS.secondary};
`

export const ForgotPassOption = styled.a`
      margin: 4% 0 7%;
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: ${COLORS.secondary};
      cursor: pointer;
        :hover {
          text-decoration: underline;
        }
          @media (max-width: 1340px) {
            font-size: 12px;
            line-height: 14px;
          }
`

export const Text = styled.p`
      display: flex;
      justify-content: center;
      margin: 4% auto 1%;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: ${COLORS.darkBg};
        a {
          display: block;
          padding: 0 2%;
          color: ${COLORS.primary};
          cursor: pointer;
              :hover {
                text-decoration: underline;
              }
        }
          @media (max-width: 1340px) {
            font-size: 12px;
            line-height: 14px;
          }
`

export const ErrorSpan = styled.span`
      display: block;
      margin: 1% 0 0;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      font-family: 'Inter', sans-serif;
      color: ${COLORS.errorContext};
          @media (max-width: 1340px) {
            font-size: 14px;
          }
`

export const SignInBtn = styled.button`
      margin: 5% auto;
      width: 500px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${COLORS.whiteContext};
      background-color: ${COLORS.primary};
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      border: none;
      border-radius: 2px;
      cursor: pointer;
          @media (max-width: 1340px) {
            width: 350px;
            height: 46px;
            font-size: 16px;
            line-height: 20px;
          }
`

export const SignUpBtn = styled.button`
      margin: 5% auto;
      width: 500px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${COLORS.whiteContext};
      background-color: ${COLORS.primary};
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      border: none;
      border-radius: 2px;
      cursor: pointer;
          @media (max-width: 1340px) {
            width: 350px;
            height: 46px;
            font-size: 16px;
            line-height: 20px;
          }
`