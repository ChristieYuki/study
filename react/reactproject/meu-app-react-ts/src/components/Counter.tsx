import React, { useState, useEffect } from 'react';
import type { CounterProps } from '../types';

const Counter: React.FC<CounterProps> = ({ 
  initialValue = 0, 
  onCountChange 
}) => {
  const [count, setCount] = useState<number>(initialValue);

  useEffect(() => {
    onCountChange?.(count);
  }, [count, onCountChange]);

  const increment = (): void => {
    setCount(prev => prev + 1);
  };

  const decrement = (): void => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;