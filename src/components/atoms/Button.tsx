import * as React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const BaseButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TomatoButton = styled(BaseButton)`
  color: tomato;
  border-color: tomato;
`;
