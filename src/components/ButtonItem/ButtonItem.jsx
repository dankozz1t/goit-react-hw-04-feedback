import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonItem.module.css';

function ButtonItem({ name, text, onLeaveFeedback }) {
  return (
    <li>
      <button className={s.button} name={name} onClick={onLeaveFeedback}>
        {text}
      </button>
    </li>
  );
}

ButtonItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default ButtonItem;
