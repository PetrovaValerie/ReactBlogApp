import styled from 'styled-components';
import {COLORS} from '../../../others/globalStyle/style';

export const CheckBoxWrapper = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconWrap = styled.div<{stroke?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  color: black;
  
  & svg:nth-child(n) {
    stroke: ${props => props.stroke ? `${COLORS.whiteContext}` : `black`};
  } 

  &:first-of-type {
    border-right: 1px solid ${COLORS.whiteContext};
  }
`