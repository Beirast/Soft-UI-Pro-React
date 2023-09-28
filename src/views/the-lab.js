import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './the-lab.css'

const TheLab = (props) => {
  return (
    <div className="the-lab-container">
      <Helmet>
        <title>The-Lab - Soft UI Pro</title>
        <meta property="og:title" content="The-Lab - Soft UI Pro" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
    </div>
  )
}

export default TheLab
