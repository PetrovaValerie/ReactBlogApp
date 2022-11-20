import styled from 'styled-components';
import {COLORS} from '../../../../others/globalStyle/style';

export const BurgerWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `

export const StyledBurger = styled.div<{ open: boolean }>`
    margin: 0;
    max-height: 50px;
    position: relative;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background-color: ${COLORS.primary};
      div {
        background-color: ${COLORS.whiteContext};
        margin: 3px 0;
        width: 30px;
        height: 3px;
        border-radius: 10px;
        transform-origin: 1px;
          &:nth-child(1) {
            transform:${props => props.open ? 'rotate(40deg)' : 'rotate(0)'};
          }
          &:nth-child(2) {
            transform:${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${props => props.open ? 0 : 1};
          }
          &:nth-child(3) {
            transform:${props => props.open ? 'rotate(-40deg)' : 'rotate(0)'};
          }
    }
`
