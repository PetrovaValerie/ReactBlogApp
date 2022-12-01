import styled from 'styled-components';
import {COLORS} from '../../others/globalStyle/style';
import {NavLink} from "react-router-dom";

export const SelectedPostWrap = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
 `

export const SelectedNav = styled.div`
     //width: 280px;
     min-width: 320px;
     position: absolute;
     left:20%;
     top: 2%;
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

export const SelectedTitle = styled.h2`
    max-width: 50%;
    margin: 10% 0 1%;
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    line-height: 35px;
    font-weight: 600;
    color: ${COLORS.secondary};
    outline: none;
    cursor: pointer;
 `

export const SelectedImg = styled.img`
   display: block;
   max-width: 50%;
   max-height: 600px;
   padding: 1%;
   cursor: pointer;
 `

export const SelectedDesc = styled.p`
    max-width: 50%;
    padding: 1.5%;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${COLORS.secondary};
 `

export const SelectedIcons = styled.div`
     margin: 2% auto;
     width: 48%;
     display: flex;
     justify-content: space-between;
 `

export const SelectedLikes = styled.div`
      width: 200px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: ${COLORS.whiteContext};
       :nth-child(n) {
        width: 88px;
        height: 56px;
        background: ${COLORS.lightContext};
        font-family: 'Malgun Gothic', sans-serif;
        color: ${COLORS.secondary};
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
 `

export const SelectedBookmark = styled.button`
     width: 237px;
     height: 56px;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     background: ${COLORS.lightContext};
     border: none;
     cursor: pointer;
 
        p {
         font-family: 'Inter', sans-serif;
         font-size: 18px;
         line-height: 24px;
         font-weight: 600;
         color: ${COLORS.secondary};
         background: ${COLORS.lightContext};
        }
 `



