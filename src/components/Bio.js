import React from 'react';
import { FaLinkedin, FaGithub, FaMedium  } from 'react-icons/fa6'; // Ensure you've installed react-icons using npm or yarn

const Bio = () => {
  return (
    <div style={{ padding: '1%', textAlign: 'center', maxWidth:'35%'}}>
      <img src="https://via.placeholder.com/150" alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      <p>Hello, I'm [Your Name]. I'm a passionate Data Scientist and Software Developer based in [Location]. Welcome to my personal portfolio!</p>
      <div>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
          <FaLinkedin size={30} color="#48C9B0" />
        </a>
        <a href="https://github.com/ballack96" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
          <FaGithub size={30} color="#48C9B0" />
        </a>
        <a href="https://medium.com/@r.deb1996" target="_blank" rel="noopener noreferrer">
          <FaMedium  size={30} color="#48C9B0" />
        </a>
      </div>
    </div>
  );
};

export default Bio;