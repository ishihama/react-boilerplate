import * as React from 'react';

interface Props {
  color: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Button: React.FC<Props> = (props: Props) => {
  const { color, children, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
