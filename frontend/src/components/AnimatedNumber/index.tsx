import React, { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  targetValue: number;
  duration: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const increment = targetValue / (duration / 50);
    let value = 0;

    const intervalId = setInterval(() => {
      value += increment;
      if (value >= targetValue) {
        value = targetValue;
        clearInterval(intervalId);
      }
      setCurrentValue(Math.floor(value));
    }, 50);

    return () => clearInterval(intervalId);
  }, [targetValue, duration]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return <span>{formatCurrency(currentValue)}</span>;
};

export default AnimatedNumber;
