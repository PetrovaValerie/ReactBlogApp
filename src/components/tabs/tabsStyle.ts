import styled from 'styled-components';
import {COLORS} from './../../style';

export const Tabs = styled.div`
  width: 55%;
  margin: 2% auto 0;
  padding: 0 2% 0.5%;
  background-color: rgba(255, 255, 255, 0.65);
      h1 {
        max-height: 80px;
        font-family: 'Inter', sans-serif;
        font-size: 56px;
        font-weight: 700;
        line-height: 80px;
        color: ${COLORS.secondary};
      }
  `

export const TabsCol = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  li {
    margin: 0 auto;
    padding: 0;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    span {
      padding: 10px;
      width: 200px;
      display: block;
      border-bottom: 2px solid transparent;
      border-bottom: 2px solid ${COLORS.extralightBg};
  }
  // переделать border у active tab, при hover-border none
  li:first-child{
    border-bottom: 2px solid ${COLORS.secondary};
  }
  li:hover span {
    color: ${COLORS.primary};
  }
  // добавить логику со стейтом disabled
  li:last-child span {
    color: ${COLORS.mediumBg};
  }
`


