import React from "react"
import "./loading.css"
import logo from "../../assets/logo.jpeg"
const Loading = () => {
  return (
    <div className="loading">
      <span className="loading-span">
        <img className="loading-logo" src={logo} alt="" />
        {/* <ThreeDots width="200" /> */}
      </span>
    </div>
  )
}

export default Loading
