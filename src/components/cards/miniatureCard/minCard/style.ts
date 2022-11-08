import styled from 'styled-components';
import {COLORS} from '../../../../style';

export const MinCol = styled.div`
  grid-area: min;
`

export const MinCardWrapper = styled.div`
  width: 100%;
  min-height: 225px;
  padding: 2% 5% 6% 0;
  position: relative;
    ::after {
      display: block;
      content: '';
      width: 98%;
      height: 1px;
      position: absolute;
      bottom: 10px;
      left: 0;
      background-color: ${COLORS.mediumBg};
    }
      a {
        text-decoration: none;
        outline: none;
      }
      @media (max-width: 1340px) {
        min-height: 185px;
      }
`

export const MinCardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const MinCardText = styled.div`
  width: 60%;
    span {
      display: block;
      padding: 5px 0 10px;
      min-width: 100px;
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
    h3 {
      width: 100%;
      height: auto;
      margin: 2% 0.5% 0 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      color: ${COLORS.secondary};
      cursor: pointer;
      font-size: 20px;
      line-height: 30px;
      :hover {
        text-shadow: 4px 4px ${COLORS.lightContext};
      }
          @media (max-width: 1340px) {
          max-width: 90%;
          font-size: 15px;
          line-height: 22px;
          }
    }
`

export const MinCardImg = styled.div`
      img {
      float: right;
      display: block;
      width: 40%;
      cursor: pointer;
          :hover{
            box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, 
            rgba(17, 17, 26, 0.1) 0px 8px 24px, 
            rgba(17, 17, 26, 0.1) 0px 16px 48px;
          }
      }
`