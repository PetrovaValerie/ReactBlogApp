import styled from 'styled-components';
import {COLORS} from '../../style';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  margin: 5% 0;
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
        font-size: 16px;
        line-height: 20px;
      }
`

export const Form = styled.form`
  margin: 0;
  padding: 2% 10%;
  background-color: ${COLORS.extralightBg};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.mediumBg};
`

export const Input = styled.input`
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //width: 80%;
  width: 500px;
  height: 56px;
  border: none;
  border-radius: 2px;
  background-color: ${COLORS.whiteContext};
  cursor: pointer;
      ::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        color: ${COLORS.darkBg};
      }
      :focus {
        border: 2px solid ${COLORS.mediumBg};
        outline: none;
      }
          @media (max-width: 1340px) {
            width: 350px;
            ::placeholder {
              font-size: 14px;
              line-height: 18px;
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
        line-height: 16px;
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
        line-height: 16px;
      }
`

