import styled from 'styled-components';
import {COLORS} from '../../others/globalStyle/style';
import {NavLink} from "react-router-dom";

export const AddNewPostPage = styled.div`
      margin: 3% auto;
      width: 65%;
      position: relative;
`

export const AddPostNav = styled.div`
      position: absolute;
      left:10%;
      top: 2%;
      display: flex;
      flex-direction: column;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 27px;
      font-weight: 400;
          @media (max-width: 1340px) {
            font-size: 14px;
            line-height: 18px;
          }
`

export const NavBlock = styled.div`
      display: flex;
      align-items: center;
      min-width: 620px;
`

export const FormWrap = styled.form`
      padding: 20px;
      margin: 15% auto 0;
      width: 80%;
      max-width: 1120px;
      height: auto;
      background-color: ${COLORS.extralightBg};
      display:flex;
      flex-direction: column;
`

export const InputWrap = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 1fr;
`

       // NewPostLine
export const InputCol = styled.div`
      display: flex;
      flex-direction: column;
      width: 48%;
      max-width: 544px;
  position:relative;
`

export const NewPostInputTitle = styled.h3`
      margin: 40px 0 10px;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      color: ${COLORS.secondary};
`

export const AddPostInput = styled.input<{error: boolean}>`
      padding: 0 10px;
      margin-right: 1%;
      height: 56px;
      //width: 100%;
      width: 300px;
      background-color: ${COLORS.whiteContext};
      border: none;
      position: relative;
          ::placeholder {
            position:absolute;
            top: 30%;
            left: 3%;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            color: ${COLORS.darkBg};
          }
          :focus {
            outline: 1px solid ${COLORS.darkBg};
          }
`

export const NewPostImgBtn = styled.button`
      width: 165px;
      height: 52px;
      background-color: ${COLORS.extralightBg};
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      color: ${COLORS.secondary};
      border: none;
      position:absolute;
      bottom: 1.5%;
      left: 90%;
      cursor:pointer;
`

export const AddPostText = styled.textarea<{ error?: boolean }>`
        width: 100%;
        min-width: 600px;
        padding: 3% 2%;
        min-height: 245px;
        background-color: ${COLORS.whiteContext};
        border: none;
        resize: none;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items:flex-start;
          ::placeholder {
            position:absolute;
            top: 10%;
            left: 2%;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            color: ${COLORS.darkBg};
          }
          :focus {
            outline: 1px solid ${COLORS.darkBg};
          }
`

export const TxtAreaWrap = styled.div`
      display: flex;
      flex-direction: column;
`
        // Buttons
export const BtnRow = styled.div`
      max-width: 80%;
      margin: 3% auto 0;
      display: flex;
      justify-content: space-between;
`

export const DelPostBtn = styled.button`
      width: 125px;
      height: 56px;
      border: none;
      cursor: pointer;
          span {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            color: ${COLORS.errorContext};
          }
          :hover {
            background: ${COLORS.errorContext};
            span {
              color: ${COLORS.whiteContext};
            }
          }
`

export const BtnGroup = styled.div`
      width: 270px;
      display: flex;
      justify-content: space-between;
`

export const CancelBtn = styled.button`
      width: 125px;
      height: 56px;
      border: none;
      background-color: ${COLORS.lightContext};
      cursor: pointer;
          span {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            color: ${COLORS.secondary};
          }
          :hover {
            background: ${COLORS.darkBg};
            span {
              color: ${COLORS.lightContext};
            }
          }
`

export const AddPostBtn = styled.button`
      width: 125px;
      height: 56px;
      border: none;
      background-color: ${COLORS.primary};
      cursor: pointer;
          span {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            color: ${COLORS.whiteContext};
          }
          :hover {
            background-color: ${COLORS.primary2};
          }
`


