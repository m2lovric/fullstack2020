import React from 'react';

const Statistics = ({good,neutral,bad}) => {
  const total = () => {
    return good + neutral + bad;
  }

  const average = () => {
    return (good - bad) / total();
  }
  return(
    <div>
      <p>Total: {total()}</p>
      <p>Average: {average() ? average() : 0 }</p>
      <p>Positive percentage: {good ? (good / total()) * 100 : 0} %</p>
    </div>
  )
}

export default Statistics;