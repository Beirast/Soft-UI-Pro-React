import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Soft UI Pro</title>
        <meta property="og:title" content="Page - Soft UI Pro" />
      </Helmet>
      <HeaderFull rootClassName="header-full-root-class-name"></HeaderFull>
      <span className="page-text textarea">
        <span className="page-text1">Error 404</span>
        <br className="page-text2"></br>
        <span className="page-text3">Page Not Found</span>
        <br></br>
      </span>
    </div>
  )
}

export default Page
