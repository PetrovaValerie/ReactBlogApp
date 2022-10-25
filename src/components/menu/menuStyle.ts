import styled from 'styled-components';
import {COLORS} from './../../style';

export const NavItem = styled.div`
  padding:0;
  margin: 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
      section {
        width: 15%;
      }
`

export const SearchBar = styled.div`
  width: 68.5%;
  display: flex;
      input {
        padding: 0 10%;
        margin: 0;
        width: 100%;
        min-height: 50px;
        background-color: ${COLORS.primary};
        cursor: pointer;
        outline:none;
        border: none;
      }
      input:focus {
        background-color: ${COLORS.primary2};
      }
      input::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: ${COLORS.whiteContext};
      }
`

export const SearchIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3%;
  font-size: 16px;
  cursor: pointer;
  color: ${COLORS.whiteContext};
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary2};
  border-top: none;
  border-bottom: none;
`



