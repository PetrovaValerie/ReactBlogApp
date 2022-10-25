import styled from 'styled-components';
import {COLORS} from './../../../style';

export const Nav = styled.nav`
     margin: 0;
     padding: 0;
     //width: 16.5%;
     max-width: 16.5%;
     height: auto;
     background-color: ${COLORS.primary};
`

export const BurgerWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `

export const Ul = styled.ul<{ open: boolean }>`
    margin: 0;
    position: absolute;
    top: 0;
    left:0;
    list-style-type: none;
    display: ${props => props.open ? 'block' : 'none'};
    flex-direction: column;
    transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
    flex-flow: row nowrap;
      li {
        position: relative;
        top:40px;
        left:0;
        margin: 0;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 100;
        background-color: ${COLORS.whiteContext};
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: ${COLORS.secondary};
        border-bottom: 1px solid ${COLORS.mediumBg};
          :first-child,         
          :nth-child(2) {
            margin-top: 10px;
          }           
          :nth-child(5) {
            margin-top: 100%;
          }        
          :last-child {
            background-color: ${COLORS.mediumBg};
          }
            a {
              text-decoration: none;
              color: ${COLORS.secondary};
              :hover {
                color: ${COLORS.primary};
              }
            }
      }
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
