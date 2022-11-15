import styled from 'styled-components';
import {COLORS} from './../../../style';

export const UserNameWrapper = styled.div`
  width: 15%;
  min-width: 200px;
  min-height: 50px;
  background-color: ${COLORS.primary};
  border-left: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
      span {
        min-width: 15%;
        height: 30px;
        margin: 0 4%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 2px;
        color: ${COLORS.whiteContext};
        background-color: ${COLORS.primary2};
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        //line-height: 34px;
        line-height: 20px;
      }
      p {
        padding-right: 10%;
        cursor: pointer;
        text-align: center;
        color: ${COLORS.whiteContext};
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        //line-height: 34px;
        line-height: 18px;
      }
  
  @media (max-width: 1340px) {
    width: 100px;
    justify-content: center;
    p {
      font-weight: 400;
      line-height: 16px;
    }
    span {
    font-size: 10px;
    }
  }
`

