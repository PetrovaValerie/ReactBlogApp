import styled from 'styled-components';
import {COLORS} from './../../style';

export const FooterWrapper = styled.footer`
        margin: 50px auto;
        width: 80%;
        padding: 0;
        display: flex;
        justify-content: space-between;
  p {
    font-family: 'Inter', sans-serif;
    //font-size: 16px;
    font-size: 14px;
    //line-height: 24px;
    line-height: 20px;
    font-weight: 400;
    color: ${COLORS.darkBg};
  }
 `



