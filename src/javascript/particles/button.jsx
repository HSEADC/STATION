import React from 'react'

import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'

function Button({ text, arrow, linking }) {
  let actual_arrow = `Q_Arrow ${arrow}`
  const linkLong = linking
  const handleClick = () => {
    window.location.href = linkLong
  }
  return (
    <>
      <div className="A_Button" onClick={handleClick}>
        <p className="button">{text}</p>
        <div className={actual_arrow}></div>
      </div>
    </>
  )
}

export default Button
