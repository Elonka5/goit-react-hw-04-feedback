import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/Buttons';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, option) => acc + option, 0);

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positivePercentage;
  };
  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <div>
        <FeedbackOptions
          onLeaveFeedback={this.leaveFeedback}
          options={options}
        />

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              total={total}
              options={Object.entries(this.state)}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
