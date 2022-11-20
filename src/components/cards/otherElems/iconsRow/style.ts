import styled from "styled-components";
import {COLORS} from "../../../../others/styles/style";

export const IconsRow = styled.div`
    width: 100%;
    padding: 5% 2% 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LikeCount = styled.div`
        display: grid;
        grid-template-columns: 25px 50px 25px;
        justify-items: start;
        align-items: center;
            :nth-child(n) {
            font-family: 'Malgun Gothic', sans-serif;
            color: ${COLORS.secondary};
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            }
`