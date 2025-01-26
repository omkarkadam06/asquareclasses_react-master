import React from 'react';
import './Location.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

function Location() {
  const emailAddress = 'asquareclasses@gmail.com';
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef2, inView2] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef3, inView3] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="location">
      <div
        ref={viewRef}
        className={`section ${
          inView ? 'title_aaa location_heading' : 'location_heading'
        }`}
      >
        <span className="block_aaa"></span>
        <h3>
          Location & Contact<span></span>
        </h3>
      </div>
      <div
        ref={viewRef1}
        className={`location_1 ${inView1 ? 'i_v_about_us' : 'n_v_about_us'}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4717.783791127677!2d73.81644471836826!3d18.631206306776505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b867499217e9%3A0x6654cb3610f8afb5!2sASQUARE%20Academy%2C%20Pimpri!5e0!3m2!1sen!2sin!4v1701777683474!5m2!1sen!2sin"
          className="maps"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="l_r">
          <div className="l_r_p1">
            <p className="t1">Pimpri, Branch</p>
            <p className="t2">
              ASQUARE Classes Pvt Ltd, Sai Vrindavan, Office No.501, Near Indian
              Oil Petrol Pump, Nehru Nagar, Pimpri, Pune Maharashtra - 411018
            </p>
            <a href="tel:9766118877" className="t2">
              Mobile - (+91) 9766118877
            </a>
          </div>
          <div className="l_r_p2">
            <a href="tel:9766118877" className="t2">
              <button className="button">Contact Us </button>
            </a>
            <a href={`mailto:${emailAddress}`}>
              <button className="button">Mail Us </button>
            </a>
          </div>
        </div>
      </div>
      <div className="cd_divider" />
      <div
        ref={viewRef2}
        className={`location_1 ${inView2 ? 'i_v_about_us' : 'n_v_about_us'}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60504.95660725282!2d73.71760774863283!3d18.59387490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b947fcc66d41%3A0xf262ea735b04b0d4!2sASQUARE%20Medical%20%26%20IIT-JEE%20Academy%2C%20Pimple%20Saudagar!5e0!3m2!1sen!2sin!4v1701782082321!5m2!1sen!2sin"
          className="maps n_maps"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="l_r">
          <div className="l_r_p1">
            <p className="t1">Pimple Saudagar, Branch</p>
            <p className="t2">
              Asquare Classes Pvt Ltd, Office No. 206, Prime Square, Kunal Icon
              Rd, opposite Datt Raj Mandir, Pimple Saudagar, Maharashtra 411027
            </p>
            <a href="tel:9766118877" className="t2">
              Mobile - (+91) 9673394297
            </a>
          </div>
          <div className="l_r_p2">
            <a href="tel:9766118877" className="t2">
              <button className="button">Contact Us </button>
            </a>
            <a href={`mailto:${emailAddress}`}>
              <button className="button">Mail Us </button>
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60504.95660725282!2d73.71760774863283!3d18.59387490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b947fcc66d41%3A0xf262ea735b04b0d4!2sASQUARE%20Medical%20%26%20IIT-JEE%20Academy%2C%20Pimple%20Saudagar!5e0!3m2!1sen!2sin!4v1701782082321!5m2!1sen!2sin"
          className="maps y_maps"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="cd_divider" />
      <div
        ref={viewRef3}
        className={`location_1 ${inView3 ? 'i_v_about_us' : 'n_v_about_us'}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0744499244543!2d73.87571447484255!3d18.570681967642287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7d41567e7fb%3A0x6494d783a53601c!2sASQUARE%20Medical%20%26%20IIT-JEE%20Academy%2C%20Vishrantwadi%2C%20Pune.!5e0!3m2!1sen!2sin!4v1701782132649!5m2!1sen!2sin"
          className="maps"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="l_r">
          <div className="l_r_p1">
            <p className="t1">Vishrantwadi, Branch</p>
            <p className="t2">
              Asquare Classes Pvt Ltd, 156, Shoppers Orbit Mall, Pune Alandi
              Road, Near Reliance Smart Bazaar, Vishrantwadi, Pune, Maharashtra
              411015
            </p>
            <a href="tel:9766118877" className="t2">
              Mobile - (+91) 9766118866
            </a>
          </div>
          <div className="l_r_p2">
            <a href="tel:9766118877" className="t2">
              <button className="button">Contact Us </button>
            </a>
            <a href={`mailto:${emailAddress}`}>
              <button className="button">Mail Us </button>
            </a>
          </div>
        </div>
      </div>
      <div className="cd_divider" />
      <div
        ref={viewRef2}
        className={`location_1 ${inView2 ? 'i_v_about_us' : 'n_v_about_us'}`}
      >
        
        <div className="l_r">
          <div className="l_r_p1">
            <p className="t1">SIP SNBP International School || Rahatani</p>
            <p className="t2">
            Survey No. 29 / 2, Off Rahatani- Pimple Saudagar Road Near Akashganga Society, Pune, Maharashtra 411017
            </p>
            <a href="tel:9766118877" className="t2">
              Mobile - (+91) 077700 03823
            </a>
          </div>
          <div className="l_r_p2">
            <a href="tel:9766118877" className="t2">
              <button className="button">Contact Us </button>
            </a>
            <a href={`mailto:${emailAddress}`}>
              <button className="button">Mail Us </button>
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.3052301245443!2d73.78452957496505!3d18.60079758250831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91bbcc108c3%3A0xda47590223e4a7c6!2sSNBP%20International%20School!5e1!3m2!1sen!2sin!4v1736640974304!5m2!1sen!2sin"
          className="maps y_maps"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Location;
