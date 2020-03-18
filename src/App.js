import React, {useState} from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h3>Stats</h3>
      {good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad}/> : "No feedback given"}
    </div>
  )
}

export default App;
