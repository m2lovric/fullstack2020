import React from 'react';
import Statistic from './Statistic';

const Statistics = ({good,neutral,bad}) => {
  const total = () => {
    return good + neutral + bad;
  }

  const average = () => {
    return (good - bad) / total();
  }
  return(
    <table>
      <Statistic text="Good" value={good}/>
      <Statistic text="Neutral" value={neutral}/>
      <Statistic text="Bad" value={bad}/>
      <br/>
      <tr>
        <td>Total:</td>
        <td>{total()}</td>
      </tr>
      <tr>
        <td>Average:</td>
        <td>{average() ? average() : 0 }</td>  
      </tr>
      <tr>
        <td>Positive percentage:</td>
        <td>{good ? (good / total()) * 100 : 0} %</td>
      </tr>
    </table>
  )
}

export default Statistics;