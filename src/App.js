import React, {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
    return good + neutral + bad;
  }

  const average = () => {
    return (good - bad) / total();
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h3>Stats</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <br/>
      <p>Total: {total()}</p>
      <p>Average: {average() ? average() : 0 }</p>
      <p>Positive percentage: {good ? (good / total()) * 100 : 0} %</p>
    </div>
  )
}

export default App;
