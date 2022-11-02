import styled from 'styled-components';
import {COLORS} from '../../../../style';

export const BasicCardWrapper = styled.div`
  width: 50%;
  //height: auto;
  max-height: 550px;
  //padding: 20px 25px 20px 0;
  padding: 1% 3% 2% 0;
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
    span {
      padding: 10px 0 20px;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: ${COLORS.darkBg};
      cursor: pointer;
      @media (max-width: 1340px) {
        padding: 20px 0;
        font-size: 14px;
        line-height: 20px;
      }
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
        font-size: 17px;
        line-height: 24px;
      }
  }
`

export const BasicCardImg = styled.div`
      img {
      display: flex;
      justify-content: center;
      padding: 0.5%;
      cursor: pointer;
      width: 100%;
      //width: 352px;
      //height: 246px;
        @media (max-width: 1340px) {
          width: 90%;
        }
      }
`

export const BasicIcons = styled.div`
    width: 70%;
`

