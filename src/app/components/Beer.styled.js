"use client";

import styled from "styled-components";

export const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  font-size: 3rem;
`;

export const BeerImage = styled.img`
  height: 200px;
`;

export const LeftSide = styled.div`
  display: flex;
  padding: 8px;
`;

export const RightSide = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr 24px;
  grid-row-gap: 4px;
  padding: 16px;
`;

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 24px;

  ${({ $variant }) => $variant === "full" && `max-width: none;`}
`;

export const FoodPairingItem = styled.li`
  padding: 4px;
  font-size: 0.6rem;

  &::before {
    content: "→ ";
  }
`;

export const FoodPairing = styled.ul`
  display: grid;
  grid-column-gap: 8px;
  grid-auto-flow: row;
  list-style: none;
`;

export const BeerFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: 1.1rem;
`;

export const H3 = styled.h3`
  font-size: 0.9rem;
  font-weight: 400;
`;

export const Description = styled.p`
  word-break: break-word;
  font-size: 1rem;
`;

export const Tagline = styled.p`
  font-size: 0.8rem;
`;

export const BeerHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const BrewingDate = styled.div`
  font-size: 0.8rem;
  border-radius: 8px;
  background: #a7cab1;
  padding: 4px;
  max-width: 100px;
  text-align: center;
`;
