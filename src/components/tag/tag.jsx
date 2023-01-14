import React from "react"

import "./tag.css"

const Tag = ({ tag, tagType, style = {} }) => {
  return (
    // check availability content
    <>
      {tag && (
        <p style={style} className={`tag ${tagType}`}>
          {tag}
        </p>
      )}
    </>
  )
}

export default Tag
