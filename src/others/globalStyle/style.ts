import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {StateType} from "../types/themeTypes";

export const COLORS = {
    // system colors:
    primary: '#2231AA',
    primary2: '#5360CD',
    secondary: '#313037',
    // background colors:
    darkBg: '#8D8E97',
    mediumBg: '#DADADA',
    extralightBg: '#F3F3F3',
    // contextual colors:
    errorContext: '#FD3419',
    lightContext: '#E8E8E8',
    whiteContext: '#FFFFFF'
};

export const MainStyle = createGlobalStyle<{ props: StateType }>`
  
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
      a {
        cursor: pointer;
        text-decoration: none;
        color: ${({props}) => props.color};
      }
    
      body {
        background: ${({props}) => props.background};
        color: ${({props}) => props.color};
      }
      
        //main p,
        main h1,
        main h2,
        //main h3,
        .react-tabs>div,
        ul>li>a,
        ul>li 
        {
        background: ${({props}) => props.background};
        color: ${({props}) => props.color};
      }
      
      svg {
        fill: ${({props}) => props.color};
      }
      
      main p,
      //main h3,
      div:nth-child(n),
      a:visited {
        color: ${({props}) => props.color};
      }
    
      a:hover {
        color: #2231AA;
      }
      
      u {
        border-bottom: 3px solid ${({props}) => props.color};
        text-decoration: 0;
      }
  
    //styles from react-tabs
    .react-tabs__tab-list {
      border: none;
    }
    
    .react-tabs__tab {
      padding:6px 5px;
    }
`


