import styled from 'styled-components';
import {COLORS} from '../../../../style';


export const BasicCardWrapper = styled.div`
  width: 50%;
  max-height: 550px;
  //padding: 20px 25px 20px 0;
  padding: 1% 5% 2% 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::after {
    display: block;
    content: '';
    width: 85%;
    height: 1px;
    position: absolute;
    bottom: 0;
    background-color: ${COLORS.mediumBg};
  `

export const BasicCardText = styled.div`
  width: 82%;
    div {
      padding: 10px 0 20px;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${COLORS.darkBg};
      cursor: pointer;
    }
    h3 {
      width: 100%;
      height: auto;
      margin: 3px 0 5px;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 26px;
      line-height: 36px;
      color: ${COLORS.secondary};
      cursor: pointer;
        @media (max-width: 1340px) {
        font-size: 18px;
        line-height: 28px;
      }
  }
`

export const BasicCardImg = styled.div`
      img {
      padding: 1%;
      display: block;
      cursor: pointer;
      width: 100%;
      //width: 352px;
      //height: 246px;
      }
`

export const BasicIcons = styled.div`
    width: 70%;
`

