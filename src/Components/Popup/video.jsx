import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './video.css';
import './common.css';

const Video = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="videopopupextra">
      <Modal.Body>
        <div className="videomodel">
            <Button variant="close" onClick={handleClose}></Button>
            <iframe src="https://www.youtube.com/embed/pnpGN4xsG9U?si=S_67JSYrGQ4gXOMR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Video;
