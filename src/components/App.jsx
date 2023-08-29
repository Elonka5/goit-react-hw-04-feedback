import { FeedbackOptions } from './FeedbackOptions/Buttons';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = evt => {
    switch (evt) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  const total = countTotalFeedback();

  return (
    <div>
      <FeedbackOptions
        onLeaveFeedback={leaveFeedback}
        options={Object.keys({ good, neutral, bad })}
      />

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            total={total}
            options={Object.entries({ good, neutral, bad })}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
