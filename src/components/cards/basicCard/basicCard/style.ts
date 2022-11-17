import styled from 'styled-components';
import {COLORS} from '../../../../style';

export const BaseRow = styled.div`
  grid-area: basic;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  
    @media (max-width: 320px) {
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
    }
  `

export const BasicCardWrapper = styled.div`
  height: 400px;
  padding: 4% 1% 2%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    @media (max-width: 1340px) {
      height: 360px;
      padding: 2% 1% 6%;
    }
    @media (max-width: 768px) {
      align-items: center;
    }
  
    ::after {
      display: block;
      content: '';
      width: 95%;
      height: 1px;
      position: absolute;
      bottom: 0;
      background-color: ${COLORS.mediumBg};
        @media (max-width: 1340px) {
          bottom: 0;
        }
    }
    a {
      text-decoration: none;
      outline: none;
    }
  `

export const BasicCardText = styled.div`
  padding: 0 3%;
    span {
      display: block;
      padding: 5px 0 10px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: ${COLORS.darkBg};
      cursor: pointer;
      
      @media (max-width: 1340px) {
        padding: 20px 0;
        font-size: 14px;
        line-height: 20px;
      }
      @media (max-width: 768px) {
        padding: 0;
      }
    }
    h3 {
      width: 100%;
      height: 90px;
      margin: 0.5% 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 20px;
      color: ${COLORS.secondary};
      cursor: pointer;
      overflow: hidden;
      :hover {
        text-shadow: 4px 4px ${COLORS.lightContext};
      }
        @media (max-width: 1340px) {
        font-size: 17px;
        line-height: 24px;
      }
        @media (max-width: 768px) {
          margin: 0 auto;
        }
  }
`

export const BasicCardImg = styled.div`
      padding: 3%;
      img {
      display: flex;
      justify-content: center;
      cursor: pointer;
      height: 160px;
        :hover{
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        @media (max-width: 1340px) {
          height: 130px;
        }
        @media (max-width: 768px) {
          padding: 2%;
        }
        @media (max-width: 320px) {
          display: block;
          margin: 0 auto;
        }
      }
`

export const BasicIcons = styled.div`
    width: 95%;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
`

