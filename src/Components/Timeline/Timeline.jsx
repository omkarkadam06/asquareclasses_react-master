import React from 'react';
import './Timeline.css';
import { useInView } from 'react-intersection-observer';

function Timeline() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div className="timeline-container">
      <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
        <span className="block_aaa"></span>
        <h3>
          Timeline<span></span>
        </h3>
      </div>
      <ul className="timeline">
        <li style={{ '--accent-color': '#41516C' }}>
          <div className="date">2002</div>
          <div className="t1">Title 1</div>
          <div className="t2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit...
          </div>
        </li>
        <li style={{ '--accent-color': '#FBCA3E' }}>
          <div className="date">2007</div>
          <div className="t1">Title 2</div>
          <div className="t2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </div>
        </li>
        <li style={{ '--accent-color': '#E24A68' }}>
          <div className="date">2012</div>
          <div className="t1">Title 3</div>
          <div className="t2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </div>
        </li>
        <li style={{ '--accent-color': '#1B5F8C' }}>
          <div className="date">2017</div>
          <div className="t1">Title 4</div>
          <div className="t2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit...
          </div>
        </li>
        <li style={{ '--accent-color': '#4CADAD' }}>
          <div className="date">2022</div>
          <div className="t1">Title 5</div>
          <div className="t2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit...
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
