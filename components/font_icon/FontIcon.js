import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FontIcon = ({ alt, children, className, value, ...other}) => (
  <span
    data-react-toolbox='font-icon'
    aria-label={alt}
    className={classnames({'material-icons': typeof value === 'string' || typeof children === 'string'}, className)}
    {...other}
  >
    <span aria-hidden="true">{value}</span>
  </span>
);

FontIcon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

FontIcon.defaultProps = {
  alt: '',
  className: ''
};

export default FontIcon;
export { FontIcon };