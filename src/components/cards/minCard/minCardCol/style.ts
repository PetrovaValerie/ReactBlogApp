import styled from 'styled-components';
import {COLORS} from '../../../../others/globalStyle/style';

export const MinCol = styled.div`
  grid-area: min;
`

export const MinCardWrapper = styled.div`
  width: 100%;
  min-height: 225px;
  padding: 2% 5% 6% 2%;
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
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
`

export const MinCardText = styled.div`
    span {
      display: block;
      padding: 5px 0 10px;
      margin: 0 2%;
      min-width: 100px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      line-height: 20px;
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
      margin: 0 2%;
      padding: 0;
      font-family: 'Inter', sans-serif;
      color: ${COLORS.secondary};
      cursor: pointer;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      :hover {
        text-shadow: 1px 1px ${COLORS.darkBg};
      }
          @media (max-width: 1340px) {
          max-width: 90%;
          font-size: 15px;
          line-height: 22px;
          }
    }
`

export const MinCardImg = styled.div`
    margin: 0 2%;
      img {
      display: block;
      width: 50%;
      cursor: pointer;
          :hover{
            box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, 
            rgba(17, 17, 26, 0.1) 0px 8px 24px, 
            rgba(17, 17, 26, 0.1) 0px 16px 48px;
          }
      }
`