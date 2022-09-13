import React from 'react';
import PropTypes from 'prop-types';
import ButtonList from '../ButtonList';
import ButtonItem from '../ButtonItem';

function FeedbackOption({ options, onLeaveFeedback }) {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ButtonList>
      {options.map(btn => (
        <ButtonItem
          key={btn}
          text={capitalizeFirstLetter(btn)}
          name={btn}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ButtonList>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
