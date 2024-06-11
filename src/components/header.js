import * as React from "react"
import { Link } from "gatsby"
import { MdOutlineWeb } from 'react-icons/md';  // Importing an example icon

const Header = ({ siteTitle }) => {
  return (
    <header style={{ background: '#5F6A6A', padding: '0.5%' }}>
      <div style={{ margin: 'auto', maxWidth:'90%', display: 'flex', justifyContent: 'space-between', alignItems: 'space' }}>
        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', fontSize: '1.5em'  }}>
          <MdOutlineWeb size={32} color="white" style={{ marginRight: '10px' }} />
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <Link to="/profile" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Profile</Link>
          <Link to="/projects" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Projects</Link>
          <Link to="/blog" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Blog</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header
