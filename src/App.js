import React,{useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount +1)
  const decrement2 = () => setCount(previousCount => previousCount -1)

  const reset = () => setCount(previousCount => previousCount - previousCount)

  const doubler = () => setCount(count * 2)

  const  checkNumber = () => {
    if(count % 3 === 0)
      return setCount(count/3);
    else
      return;
  }
  const divide3 = () => setCount(previousCount => previousCount%3 === 0 ?previousCount/3: previousCount)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={doubler}>*2</button>
      <button onClick={divide3}>when 3 devide into 3</button>
    </>
  );
}

export default App;
