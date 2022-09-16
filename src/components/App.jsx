import { useReducer } from 'react';
import Section from './Section/section';
import Statistics from './Statistics/statistics';
import FeedbackOptions from './Feedback-options/feedback-options';
import Notification from './Notification/notification';

// const optionTags = ['good', 'bad', 'neutral']



export const App = () => {
// setState.......... *3

  // const onLeaveFeedback = opt => {
  //   switch (opt) {
  //     case 'neutral':
  //       setNeutral(prevState => prevState + 1);
  //       break;
  //     case 'good':
  //       setGood(prevState => prevState + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevState => prevState + 1);
  //       break;

  //     default:
  //       console.log(`invalid option ${opt}`);
  //   }
  // };

  const options = {
    neutral: 0,
    good: 0,
    bad: 0,
  }
  
  const optionTags = Object.keys(options)

  const reducer = (state, action) => {
    
    const { type, payload } = action;   
    return { ...state, [type]: state[type] + payload}
  }

  const [{ good, neutral, bad }, dispatch] = useReducer(reducer, options);
  // const [state, dispatch] = useReducer(reducer, options);
  
  const onLeaveFeedback = (opt) => {
  dispatch({type: opt, payload: 1})
}

  const total = [good, bad, neutral].reduce((acc, el) => (acc += el), 0);
  const positivePercentage = (good * 100) / total;

  return (
    <div className="app">
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={optionTags}
          onLeavefeedback={onLeaveFeedback}
        />
      </Section>

      {total === 0 ? (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
};
