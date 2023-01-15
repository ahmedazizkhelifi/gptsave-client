import React, { useState } from "react"
import { Navbar, SEO } from "../../components"
import Cookies from "js-cookie"

import "./login.css"
const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState(null)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const [showLogin, setShowLogin] = useState(true)

  const signup = () => {
    fetch(`${process.env.REACT_APP_AUTH_HOST}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name
      })
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
  const login = () => {
    fetch(`${process.env.REACT_APP_AUTH_HOST}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
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
      <SEO title={`${showLogin ? "Login | GPTSave" : "Signup | GPTSave"}`} />

      <div className="login section__margin section__padding">
        <div className="login__card">
          <div className="login__card-title">
            <h1>{showLogin ? "Login" : "Signup"}</h1>
          </div>
          <div className="login__card-content">
            {!showLogin && (
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            )}
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <div className="login__card-message">{errorMessage}</div>
            <div className="login__card-buttons navbar-sign">
              <button
                onClick={() => {
                  // showLogin ? login : signup
                  setShowLogin(true)
                  login()
                }}>
                Login
              </button>
              <button
                onClick={() => {
                  setShowLogin(false)
                  signup()
                }}
                style={{ backgroundColor: "#0E9474" }}>
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
