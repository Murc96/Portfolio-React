import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <FontAwesomeIcon icon={faFacebookF} className="social" />
      <FontAwesomeIcon icon={faGithub} className="social" />
      <FontAwesomeIcon icon={faTwitter} className="social" />
    </div>
  );
}

export default Sidebar;