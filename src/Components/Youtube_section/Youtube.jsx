import React, { useState } from 'react';
import './Youtube.css';
import { useInView } from 'react-intersection-observer';

function Youtube() {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const [viewRef, inView] = useInView({
        triggerOnce: true // Trigger only once
    });

    const [viewRef1, inView1] = useInView({
        triggerOnce: true // Trigger only once
    });

    return (
        <div className="introduction youtube_section">
            <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
                <span className="block_aaa"></span>
                <h3>
                    Introduction<span></span>
                </h3>
            </div>
            <p className="subtitle">
                Unlock Your Potential with ASQUARE Institute's Inspirational Journey
            </p>
            <div className="container">
                <div className="row">
                    <div className="a">
                        <div className="youtube_grid">
                            {/* Repeatable YouTube video grid items */}
                            {[...Array(4)].map((_, index) => (
                                <div className="youtube_gridItem" key={index}>
                                    <div className="youtube_link">
                                        <iframe 
                                            width="100%" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/fM-zZ8jshDM?si=kJ3NegdPeOmUWQQf" 
                                            title={`YouTube video player ${index + 1}`} 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Youtube;
