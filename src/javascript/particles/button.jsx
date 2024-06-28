import React from 'react'

import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'

export function Button({ text, arrow, linking }) {
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

export function BackButton({ text, color }) {
  const handleClick = () => {
    window.history.back()
  }

  return (
    <div className="A_SecondaryButton" onClick={handleClick}>
      <div className={`Q_Arrow backDef ${color}`}></div>
      <p className={`button ${color}`}>{text}</p>
    </div>
  )
}
