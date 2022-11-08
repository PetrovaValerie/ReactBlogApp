import styled from 'styled-components';
import {COLORS} from '../../../style';

export const BannerCardWrapper = styled.div`
  grid-area: banner;
  width: 100%;
  max-height: 448px;
  padding: 1% 5% 1% 0;
  position: relative;
      ::after {
        display: block;
        content: '';
        width: 98%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${COLORS.mediumBg};
      }
      a {
        text-decoration: none;
        outline: none;
      }
  @media (max-width: 1340px) {
    max-height: 360px;
  }
`

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const CardText = styled.div`
  width: 65%;
    span {
      display: block;
      padding: 5px 0 10px;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: ${COLORS.darkBg};
      cursor: pointer;
      @media (max-width: 1340px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    h2 {
      width: 100%;
      height: auto;
      margin: 5px 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-size: 32px;
      line-height: 44px;
      font-weight: 700;
      color: ${COLORS.secondary};
      cursor: pointer;
      :hover {
        text-shadow: 4px 4px ${COLORS.lightContext};
      }
      @media (max-width: 1340px) {
        font-size: 26px;
        line-height: 30px;
      }
    }
    p {
      width: 100%;
      height: auto;
      margin: 15px 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
      overflow: hidden;
      color: ${COLORS.darkBg};
          @media (max-width: 1340px) {
          font-size: 14px;
          line-height: 20px;
          }
    }
`

export const CardImg = styled.div`
  width: 35%;
      img {
      float: right;
      display: block;
      width: 90%;
      cursor: pointer;
          :hover{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
      }
`

export const IconsRow = styled.div`
    width: 100%;
    padding: 5% 0 3%;
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
      cursor: pointer;
      div {
        padding: 0 3px;
        margin: 0;
        width: 40px;
        display: block;
        font-family: 'Malgun Gothic', sans-serif;
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
      }
    }
`

export const BookmarkWrap = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.secondary};
    font-size: 14px;
    line-height: 20px;
    font-weight: 800;
    cursor: pointer;
  }
  a {
    padding: 0 15px;
  }
`
