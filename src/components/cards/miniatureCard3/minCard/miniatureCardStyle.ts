import styled from 'styled-components';
import {COLORS} from '../../../../style';

export const MinCardWrapper = styled.div`
  width: 100%;
  //padding: 20px 5px 25px;
  padding: 1% 5% 10% 0;
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
`

export const MinCardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const MinCardText = styled.div`
  width: 70%;
    span {
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
      //font-size: 26px;
      //line-height: 36px;
          @media (max-width: 1340px) {
          max-width: 90%;
          font-size: 15px;
          line-height: 22px;
          }
    }
`

export const MinCardImg = styled.div`
  //width: 20%;
      img {
      float: right;
      display: block;
      width: 100%;
      max-width: 240px;
      cursor: pointer;
        @media (max-width: 1340px) {
          width: 95%;
        }
      }
`