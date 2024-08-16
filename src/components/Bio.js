import React from 'react';
import { FaLinkedin, FaGithub, FaMedium  } from 'react-icons/fa6'; // Ensure you've installed react-icons using npm or yarn
import profileImage from '../images/DSC_0676.jpg'; // Adjust the path if necessary
import Typical from 'react-typical'
import 'aos/dist/aos.css'

const Bio = () => {
  return (
    <div style={{ padding: '1%', display:'flex', flexDirection:'row', alignItems:'center', textAlign: 'center',  justifyContent: 'center', maxWidth:'100%', marginTop:'0%'}}>
      <img src={profileImage} alt="Profile" style={{ width: '250px', height: '250px', borderRadius: '50%' }} />
      <div style={{ fontSize: '1.0rem', paddingLeft:'10%'}}>
        <p data-aos="fade-up" style={{textAlign:'justify', overflowWrap: 'normal'}}>
          Hello, I'm Ranojoy. Welcome to my personal portfolio! As a dedicated data scientist and software developer, 
          my projects harness the power of data to drive meaningful change and create cutting-edge applications.<br/> 
          <br/>
          Here, you'll find a showcase of my work, blending data analysis and software development to solve real-world problems and create impactful tools
        </p>
        <div data-aos="fade-up">
          <a href="https://www.linkedin.com/in/ranojoy-deb/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <FaLinkedin size={40} color="#48C9B0" />
          </a>
          <a href="https://github.com/ballack96" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <FaGithub size={40} color="#48C9B0" />
          </a>
          <a href="https://medium.com/@r.deb1996" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <FaMedium  size={40} color="#48C9B0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;