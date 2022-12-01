import styled from 'styled-components';
import {COLORS} from '../../others/globalStyle/style';

export const PageListing = styled.div`
    //margin: 0;
`
export const PaginateWrap = styled.div`
    margin: 0 auto;
`

export const CardImgPaginate = styled.div`
    width: 30%;
      img {
        width: 40%;
      }
`

export const BannerCardWrapperPag = styled.div`
  grid-area: banner;
  width: 100%;
  height: 400px;
  padding: 1% 5% 1% 0;
  position: relative;
      a {
        text-decoration: none;
        outline: none;
      }
  @media (max-width: 1340px) {
    max-height: 360px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const StyledPaginateContainer = styled.div`
  margin: 0 auto;
  .pagination {
    color: #0366d6;
    display: flex;
    margin: 40px auto;
    list-style: none;
  }
  
  li {
    margin: 0 10px;
    cursor: pointer;
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #0366d6;
    color: white;
  }
`;