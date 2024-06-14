import React from 'react';
import './History.css';
import '../style.css';
import history_illustrator from '../Assets/history-illustrator.png';
import { useInView } from 'react-intersection-observer';

function History() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div className="history">
      <div
        ref={viewRef}
        className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
      >
        <span className="block_aaa"></span>
        <h3>
          Our History<span></span>
        </h3>
      </div>
      <p className="subtitle">A Legacy of Educational Excellence</p>
      <div className="h_content">
        <p className="paragraph">
          In 2010 Shri AJIT ANUPAM approved the firm with just five students and
          after a few months Er. Amit Anupam, the eminent professor of CHEMISTRY
          also joined him. It was the only institute of its time which provided
          coaching for all Science subjects i.e. Physics, Chemistry and
          Mathematics under one roof. This small association became the
          foundation stone of the revolutionary Pre-Medical coaching institute
          after a year with well biology faculties and ASQUARE became a unite
          firm for Pre-engineering and Pre-medical aspirants. ASQUARE is a
          symbol of united family of two devoted brothers, which has grown up to
          a large group of empire of more than 50 members as on date, with trust
          of more than thousands students since 2010. The Institute is in
          parallel with Indian values, spiritualism & hard work with the
          efficient faculties With this, the institute is on its “Path to
          Success...” by writing its success story and adding more episodes of
          splendid achievements year after year.
        </p>
        <img src={history_illustrator} alt="img" />
      </div>
    </div>
  );
}

export default History;
