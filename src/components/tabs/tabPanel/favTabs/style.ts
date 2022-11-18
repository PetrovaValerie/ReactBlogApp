import styled from 'styled-components';
import {COLORS} from '../../../../others/styles/style';

export const FavContainer = styled.div`
      margin: 3% auto;
      width: 80%;
      display: flex;
      flex-direction: column;
`

export const FavWrap = styled.div`
      display: flex;
`

export const FavImg = styled.img`
      width: 20%;
`

export const FavText = styled.div`
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
            width: 80%;
            //height: 90px;
            margin: 0.5%;
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
    }
`