import React, { useState, useEffect } from 'react';
import './Hero.css';
import '../style.css';

function Counter(props) {
  var [sign, setSign] = useState('');
  var [count, setCount] = useState(0);
  const time = 3000;
  const interval = time / props.maxCount;
  useEffect(() => {
    const timer = setInterval(() => {
      if (count > props.maxCount) {
        setSign('+');
        return;
      }
      setCount(count++);
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex-centre-bet" key={props.id}>
      <p className='t1'>{`${count} ${sign}`}</p>
      <p className='t2'>{props.course}</p>
    </div>
  );
}

export default Counter;
