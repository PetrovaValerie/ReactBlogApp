import styled from "styled-components";
import {COLORS} from "../../../../../others/styles/style";

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
        background-color: transparent;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: ${COLORS.secondary};
        border-bottom: 1px solid ${COLORS.mediumBg};
          :first-child {
            margin-top: 10px;
          }                
          :nth-child(2) {
            margin-top: 5px;
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
