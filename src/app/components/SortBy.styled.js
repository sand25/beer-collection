"use client";

import styled from "styled-components";

export const SortButton = styled.button`
  height: 40px;
  padding: 4px;
  background: transparent;
  font-size: 0.8rem;

  ${({ $active }) => $active && `text-decoration: underline;`}
`;
