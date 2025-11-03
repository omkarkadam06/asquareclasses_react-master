import React from 'react';
import './pages.css';

function Loading() {
  return (
    <div className="loading_div">
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </div>
  );
}

export default Loading;
