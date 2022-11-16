import styled from 'styled-components';
import {COLORS} from '../../style';
import {TabList} from "react-tabs";
import {NavLink} from "react-router-dom";

export const TopWrap = styled.div`
      margin: 3% auto;
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
`

export const BackBtn = styled(NavLink)`
      margin: 0;
      padding: 0.4%;
      text-decoration: none;
      outline: none;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: ${COLORS.secondary};
          :hover {
            text-decoration: underline;
          }
          @media (max-width: 1340px) {
            font-size: 14px;
            line-height: 18px;
          }
`

export const WebTitle = styled.h1`
      margin-top: 2%;
      font-family: 'Inter', sans-serif;
      font-size: 56px;
      line-height: 80px;
      font-weight: 700;
      color: ${COLORS.secondary};
      cursor: pointer;
      z-index: 2;
          @media (max-width: 1340px) {
            font-size: 40px;
            line-height: 45px;
          }
`

export const PrimaryTabListing = styled(TabList)`
    display: flex;
    outline: none;
`

export const TabText = styled.div`
    padding: 20px 40px 25px;
    margin-bottom: -5px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    outline: none;
    border-bottom: 1px solid transparent;
      :hover {
        border-bottom: 1px solid ${COLORS.secondary};
      }
      @media (max-width: 1340px) {
        padding: 10px 30px 15px;
        font-size: 14px;
        line-height: 20px;
      }
`

export const AllTabs = styled.div`
      width: 70%;
      margin: 1% auto 0;
      padding: 0 2% 0.5%;
      background-color: rgba(255, 255, 255, 0.65);
          h1 {
            max-height: 80px;
            font-family: 'Inter', sans-serif;
            font-size: 56px;
            line-height: 80px;
            font-weight: 700;
            color: ${COLORS.secondary};
          }
`

export const TabCol = styled.div`
      width: 100%;
      display: grid;
      height: auto;
      grid-template-areas: 
            "banner min"
            "basic min"
            "basic min";
      grid-template-rows: repeat(3, auto);
      grid-template-columns: 70% 30%;
  
          @media (max-width: 768px) {
            grid-template-areas: 
                    "basic basic"
                    "basic basic"
                    "basic basic";
          }
`

export const Loader = styled.div`
      margin: 15% auto 0;
      position: relative;
      width: 100px;
      height: 100px;
          :before , :after{
            content: '';
            border-radius: 50%;
            position: absolute;
            inset: 0;
            box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
          }
          :after {
            box-shadow: 0 2px 0 ${COLORS.primary} inset;
            animation: rotate 2s linear infinite;
          }
        
          @keyframes rotate {
            0% {  transform: rotate(0)}
            100% { transform: rotate(360deg)}
          }
`


