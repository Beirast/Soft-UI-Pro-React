import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className={`header-full-header ${props.rootClassName} `}>
      <nav className="header-full-nav">
        <div className="header-full-container">
          <Link to="/" className="header-full-navlink">
            <span className="Large header-full-text">Xeon Phinatics</span>
            <br className=""></br>
          </Link>
          <div className="header-full-menu">
            <Link to="/" className="header-full-navlink1 Large">
              Home
            </Link>
            <Link to="/profile" className="header-full-navlink2 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-full-navlink3 Large">
              Coming Soon
            </Link>
          </div>
          <div className="header-full-container1">
            <div className="header-full-container2">
              <PrimaryPinkButton
                button="Click Here!"
                className=""
              ></PrimaryPinkButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-full-icon">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

HeaderFull.defaultProps = {
  rootClassName: '',
}

HeaderFull.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeaderFull
