import styled from 'styled-components';
import {COLORS} from '../../style';
import {NavLink} from "react-router-dom";

export const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
 `
export const NavWrap = styled.div`
     width: 140px;
     position: absolute;
     left:26%;
     top: 4%;
     display: flex;
     justify-content: space-evenly;
     font-family: 'Inter', sans-serif;
     font-size: 16px;
     line-height: 27px;
     font-weight: 400;
    span {
     color: ${COLORS.darkBg};
     cursor: pointer;
    }
       @media (max-width: 1340px) {
        font-size: 14px;
        line-height: 18px;
       }
 `

export const HomeBtn = styled(NavLink)`
    text-decoration: none;
    p {
     color: ${COLORS.secondary};
       :hover {
        text-decoration: underline;
       }
    }
 `

export const Title = styled.h2`
    margin: 5% 0 1%;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    line-height: 70px;
    font-weight: 700;
    color: ${COLORS.secondary};
    outline: none;
    cursor: pointer;
 `

export const Img = styled.img`
   display: block;
   max-width: 50%;
   max-height: 600px;
   padding: 1%;
   cursor: pointer;
 `

export const Description = styled.p`
    max-width: 50%;
    padding: 1.5%;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${COLORS.secondary};
 `




