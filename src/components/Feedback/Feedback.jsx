import React from 'react';
import { useState } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOption from 'components/FeedbackOption';
import Notification from 'components/Notification';
import Section from 'components/Section';

import s from './Feedback.module.css';

const BUTTONS = {
  Good: 'good',
  Neutral: 'neutral',
  Bad: 'bad',
};

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case BUTTONS.Good:
        setGood(good => good + 1);
        break;

      case BUTTONS.Neutral:
        setNeutral(neutral => neutral + 1);
        break;

      case BUTTONS.Bad:
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.ceil((good * 100) / countTotalFeedback());
  return (
    <div className={s.box}>
      <Section title="Please leave feedback">
        <FeedbackOption
          options={Object.values(BUTTONS)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
