import React, { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Notification from './Notification'

import styles from './feedback.module.scss';

const feedbackOptions = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const { good, neutral, bad } = state;

  const handleLeaveFeedback = ({ target: { name } }) => setState({
    ...state,
    [name]: state[name] + 1,
  });

  const total = good + neutral + bad;  
  const percent = Math.round(good / total * 100);
  
  return (
    <div className={styles.feedback_block}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        { total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="No feedback given"/>
        )}
      </Section>
    </div>
  );
}
    
export default Feedback;