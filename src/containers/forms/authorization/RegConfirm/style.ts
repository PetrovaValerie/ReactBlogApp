import styled from 'styled-components';
import {COLORS} from '../../../../others/globalStyle/style';
import {NavLink} from "react-router-dom";

export const ConfirmText = styled.div`
  padding: 10% 10% 10% 0%;
  display: flex;
  flex-direction: column;
  font-family: 'Catamaran', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${COLORS.secondary};
`

export const SuccessButton = styled(NavLink)`
  margin: 5% 0;
  width: 500px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.whiteContext};
  background-color: ${COLORS.primary};
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;

  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
      @media (max-width: 1340px) {
        width: 350px;
        font-size: 16px;
        line-height: 20px;
      }
`


