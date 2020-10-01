import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton } from './LinkButton.styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  route: string;
}

const LinkButton: React.FC<Props> = ({ children, route, ...rest }) => {
  const history = useHistory();
  const handleClick = (path: string): void => history.push(path);
  return (
    // eslint-disable-next-line
    <StyledButton onClick={(): void => handleClick(route)} {...rest}>
      {children}
    </StyledButton>
  );
};

export default LinkButton;
