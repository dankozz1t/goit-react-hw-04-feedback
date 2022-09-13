import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonList.module.css';

function ButtonList({ children }) {
  return <ul className={s.list}>{children}</ul>;
}

ButtonList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ButtonList;
