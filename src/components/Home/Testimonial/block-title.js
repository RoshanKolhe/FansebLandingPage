import React from "react"

const BlockTitle = ({ textAlign, image, title }) => {
  return (
    <div className={`block-title text-${textAlign}`}>
      <img src={image} alt="Awesome alter Text" />
      <h2>{title}</h2>
    </div>
  )
}

export default BlockTitle
