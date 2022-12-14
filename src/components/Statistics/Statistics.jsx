import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={`${s.item} ${s.good}`}>Good: {good}</li>
      <li className={`${s.item} ${s.neutral}`}> Neutral: {neutral}</li>
      <li className={`${s.item} ${s.bad}`}> Bad: {bad}</li>
      <li className={`${s.item} ${s.total}`}> Total: {total}</li>
      <li className={`${s.item} ${s.percent}`}>
        Positive feedback: {positivePercentage ? positivePercentage : 0} %
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
