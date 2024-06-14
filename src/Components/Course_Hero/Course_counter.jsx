import React, { useState, useEffect } from 'react';
import '../style.css';

function Course_Counter(props) {
  var [sign, setSign] = useState('');
  var [count, setCount] = useState(0);
  let time = 3000 / props.data;
  if (props.data < 500) {
    time = 6000 / props.data;
  } else if (props.data > 1400) {
    time = 300 / props.data;
  } else if (props.data > 2000) {
    time = 300 / props.data;
  }
  var [interval, setIntervals] = useState(time);
  useEffect(() => {
    const timer = setInterval(() => {
      if (count > props.data) {
        if (props.id <= 2) {
          setSign('+');
        } else if (props.id == 3 || props.data == 99) {
          setSign('%');
        } else {
          setSign('');
        }
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
      <p className="t1">{`${props.data} ${sign}`}</p>
      <p className="t2">{props.text}</p>
    </div>
  );
}

export default Course_Counter;
