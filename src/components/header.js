import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
      <header style={{ background: '#5F6A6A', padding: '10px 20px' }}>
      <div style={{ margin: '0 auto', maxWidth: 960, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          {siteTitle}
          </Link>
        </h1>
        <nav>
          <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
          {/* Add more navigation links here */}
        </nav>
      </div>
    </header>
)

export default Header
