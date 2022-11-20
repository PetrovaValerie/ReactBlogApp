import styled from 'styled-components';
import {COLORS} from '../../../others/styles/style';

export const CheckBoxWrapper = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
`
export const IconWrap = styled.div<{stroke?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  
  & svg:nth-child(1) {
    stroke: ${props => props.stroke ? `${COLORS.mediumBg}` : `black`};
  } 

  &:first-of-type {
    border-right: 1px solid #bdbdbd;
  }
`