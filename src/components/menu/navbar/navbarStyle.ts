import styled from 'styled-components';
import {COLORS} from './../../../style';

export const Nav = styled.nav`
     margin: 0;
     padding: 0 0 0 1%;
     width: 5%;
     height: auto;
     background-color: ${COLORS.primary};
`

export const BurgerWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
  `

export const Ul = styled.ul<{ open: boolean }>`
    margin: 0;
    position: relative;
    top: 80px;
    list-style-type: none;
    display: ${props => props.open ? 'block' : 'none'};
    flex-direction: column;
    transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
    flex-flow: row nowrap;
        @media (max-width: 768px) {
          flex-flow: column nowrap;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 300px;
          padding-top: 3.5rem;
        }
`

export const StyledBurger = styled.div<{ open: boolean }>`
    margin: 0;
    height: 50px;
    position: fixed;
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
        height: 2px;
        border-radius: 10px;
        transform-origin: 1px;
        
          &:nth-child(1) {
            transform:${props => props.open ? 'rotate(35deg)' : 'rotate(0)'};
          }
          &:nth-child(2) {
            transform:${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${props => props.open ? 0 : 1};
          }
          &:nth-child(3) {
            transform:${props => props.open ? 'rotate(-35deg)' : 'rotate(0)'};
          }
    }
`
