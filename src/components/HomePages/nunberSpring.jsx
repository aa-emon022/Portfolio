 'use client'
import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

const NumberSpring = ({ n }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(n);
  }, [n]);

  const { number } = useSpring({
    from: { number: 0 },
    number: count,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default NumberSpring;
