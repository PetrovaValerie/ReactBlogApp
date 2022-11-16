import styled from "styled-components";
import {COLORS} from "../../../style";

export const BookmarkWrap = styled.div`
  cursor: pointer;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${COLORS.secondary};
        font-size: 14px;
        line-height: 20px;
        font-weight: 800;
      }
      a {
        padding: 0 15px;
      }
      svg:hover {
        fill: ${COLORS.primary};;
      }
`