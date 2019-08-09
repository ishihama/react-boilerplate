import * as React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Button: React.FC<Props> = (props: Props) => {
  const { color, children, onClick } = props;

  return (
    <BaseButton type="button" onClick={onClick}>
      {children}
    </BaseButton>
  );
};

const BaseButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default Button;
