import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className="card-container">
      <span>{props.text}</span>
    </div>
  )
}

Card.defaultProps = {
  text: 'Text',
}

Card.propTypes = {
  text: PropTypes.string,
}

export default Card
