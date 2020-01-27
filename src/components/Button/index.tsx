import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styled';

const Button = ({ children, ...props }: { children: any }) => (
  <ButtonWrapper type="button" {...props} data-testid="component-button">
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
