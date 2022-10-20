import styled from 'styled-components';
import {COLORS} from './../../../style';

export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
  `

export const Card = styled.div`
  width: 60%;
    div {
      padding: 5px 0;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${COLORS.darkBg};
    }
    h2 {
      max-width: 70%;
      margin: 10px 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-size: 32px;
      font-weight: 700;
      line-height: 44px;
      color: ${COLORS.secondary};
    }
    p {
      max-width: 85%;
      margin: 15px 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      color: ${COLORS.darkBg};
    }
  `

export const IconsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LikeCount = styled.div`
  display: flex;
    div {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${COLORS.secondary};
      div {
        padding: 0 3px;
        margin: 0;
        width: 40px;
        display: block;
        font-family: 'Malgun Gothic', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
    }
`

export const BookmarkWrap = styled.div`
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.secondary};
  }
  a{
    padding-left: 15px;
  }
`

export const CardImg = styled.div`
  width: 40%;
      div {
      display: block;
      width: 256px;
      height: 244px;
      border: 1px solid ${COLORS.secondary};
      }
    `