import React from 'react'
import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/adaptives/adaptive.scss'
export function Q_Image({ width, height, margin, url }) {
  const full_column = 4.7
  const gap = 1.2
  const width_I = width * full_column - gap
  const margin_I = margin * full_column
  return (
    <img
      className="Q_Image"
      src={`${url}`}
      style={{
        width: `${width_I}vw`,
        height: `${height}vh`,
        marginLeft: `${margin_I}vw`
      }}
    />
  )
}

export function W_ImagesRow({
  width_1,
  width_2,
  width_3,
  height,
  url_1,
  url_2,
  url_3
}) {
  let margin_actual
  if (!width_3) {
    margin_actual = 2
  } else {
    margin_actual = 0
  }
  return (
    <div className="W_ImageRow">
      {width_1 && (
        <Q_Image
          width={width_1}
          height={height}
          url={url_1}
          margin={margin_actual}
        />
      )}
      {width_2 && <Q_Image width={width_2} height={height} url={url_2} />}
      {width_3 && <Q_Image width={width_3} height={height} url={url_3} />}
    </div>
  )
}
