import { useState, useEffect } from 'react';

function useCounterDouble(initialValue) {
  const [counter, setCounter] = useState(initialValue);
  const [double, setDouble] = useState(initialValue);

  useEffect(() => {
    setDouble(counter * 2);
  }, [counter]);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return {
    counter,
    double,
    increaseCounter
  };
}

export default useCounterDouble;
