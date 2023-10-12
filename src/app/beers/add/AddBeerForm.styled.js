"use client";

import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #333;
  height: 24px;
  padding: 16px;
  font-size: 1rem;
  width: 100%;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  grid-row-gap: 8px;
  padding: 8px;
`;

export const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 4px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  border: 1px solid #333;
  padding: 8px;
  text-align: center;
  width: 100%;
`;
