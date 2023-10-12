"use client";

import styled, { css } from "styled-components";
import { BeerContainer, BeerFooter, LeftSide, RightSide } from "./Beer.styled";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  ${LeftSide}, ${BeerFooter} {
    display: none;
  }

  ${RightSide} {
    padding: 16px 0;
  }

  ${BeerContainer} {
    padding: 0 16px;
    max-width: 100%;
  }
`;

export const ListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-column-gap: 8px;
  margin-top: 16px;
`;

export const ListStyleButton = styled.button`
  width: 40px;
  height: 40px;
  ${({ $active }) =>
    $active &&
    css`
      color: #88b7b5;
    `}
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 200px;
  padding: 4px;
`;

export const Label = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const RangeInput = styled.input`
  height: 40px;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 8px;
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-column-gap: 8px;
`;
