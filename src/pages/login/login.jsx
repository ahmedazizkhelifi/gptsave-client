import React, { useState } from "react"
import { Navbar } from "../../components"
import Cookies from "js-cookie"

import "./login.css"
const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [data, setData] = useState(null)

  const login = () => {
    console.log(`${process.env.REACT_APP_AUTH_HOST}/auth/login`)
    fetch(`${process.env.REACT_APP_AUTH_HOST}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: "aziz", password: "aziz" })
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          console.log(response)
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        Cookies.set("token", data.token)
        console.log(data)
        window.location.href = "/"
      })
      .catch((error) => {
        setErrorMessage(error?.message ?? "Something went wrong")
        setTimeout(() => {
          setErrorMessage(null)
        }, 1000)
        console.error(error)
      })
  }
  return (
    <>
      <Navbar />
      <div className="login section__margin section__padding">
        <div className="login__card">
          <div className="login__card-title">
            <h1>Login</h1>
          </div>
          <div className="login__card-content">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="login__card-message">{errorMessage}</div>
            <div className="login__card-buttons navbar-sign">
              <button onClick={login}>Login</button>
              <button style={{ backgroundColor: "#0E9474" }}>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
