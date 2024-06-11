import React from 'react'

import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'
import '../../stylesheets/components/molecules.scss'
import '../../stylesheets/components/wrappers.scss'

export function SectionHeading({
  heading,
  description,
  unactive,
  id,
  onClick
}) {
  return (
    <>
      {!unactive && (
        <div class="A_SectionHeading" id={id} onClick={onClick}>
          <h1>
            <span>о!</span>
            {heading}
          </h1>
        </div>
      )}
      {unactive && (
        <div class="A_SectionHeading unactive" id={id} onClick={onClick}>
          <h1>
            <span>о!</span>
            {heading}
          </h1>
        </div>
      )}
      {description && (
        <div class="A_SectionDescribe">
          <p>{description}</p>
        </div>
      )}
    </>
  )
}
