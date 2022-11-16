import styled from "styled-components";
import {COLORS} from "../../../style";

export const LikeCount = styled.div`
  display: flex;
  div {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.secondary};
    cursor: pointer;
    div {
      padding: 0 3px;
      margin: 0;
      width: 40px;
      display: block;
      font-family: 'Malgun Gothic', sans-serif;
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;
    }
  }
`