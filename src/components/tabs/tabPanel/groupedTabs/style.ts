import styled from 'styled-components';
import {COLORS} from '../../../../others/globalStyle/style';

export const GroupedTitle = styled.h2`
  padding: 2% 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: ${COLORS.darkBg};
  cursor: pointer;
`

export const GroupedCards = styled.div`
      margin: 3% auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid ${COLORS.darkBg};
`

export const GroupedWrap = styled.div`
      display: flex;
`

export const GroupedImg = styled.div`
  width: 20%;
  img {
    float: right;
    width: 90%;
    display: block;
    cursor: pointer;
    :hover{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`

export const GroupedText = styled.div`
      width: 80%;
      padding: 0.5% 3%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
          a {
            text-decoration: none;
            outline: none;
          }
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
              font-size: 14px;
              line-height: 20px;
            }
          }
          h2 {
            width: 100%;
            margin: 0.5%;
            padding: 0;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 20px;
            color: ${COLORS.secondary};
            cursor: pointer;
            overflow: hidden;
            :hover {
              text-shadow: 1px 1px ${COLORS.darkBg};
            }
            @media (max-width: 1340px) {
              font-size: 17px;
              line-height: 24px;
            }
            @media (max-width: 768px) {
              margin: 0 auto;
            }
        }   
    }
`