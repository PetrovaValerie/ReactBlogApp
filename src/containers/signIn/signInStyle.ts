import styled from 'styled-components';
import {COLORS} from '../../style';


export const TitleWrap = styled.div`
  /*width: 15%;*/
  margin-top: 30px;
  width: 140px;
  height: 50px;
  background-color: ${COLORS.primary};
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 1%;
    span {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 34px;
      color: ${COLORS.whiteContext};
    }
`