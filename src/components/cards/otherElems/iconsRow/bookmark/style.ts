import styled from "styled-components";
import {COLORS} from "../../../../../others/globalStyle/style";

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
      svg:hover {
        fill: ${COLORS.primary};;
      }
`