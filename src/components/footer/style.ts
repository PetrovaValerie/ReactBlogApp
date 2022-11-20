import styled from 'styled-components';
import {COLORS} from '../../others/globalStyle/style';

export const FooterWrapper = styled.footer`
    margin: 0 auto;
    padding: 5% 18%;
    display: flex;
    justify-content: space-between;
       p {
       font-family: 'Inter', sans-serif;
       font-size: 14px;
       line-height: 20px;
       font-weight: 400;
       color: ${COLORS.darkBg};
         @media (max-width: 1340px) {
         font-size: 12px;
         line-height: 14px;
       }
    }
 `



