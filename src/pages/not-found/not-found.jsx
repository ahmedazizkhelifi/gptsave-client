import React from "react"
import { SEO } from "../../components"
import "./not-found.css"

const Notfound = ({ title }) => {
  return (
    <>
      <SEO
        title={`${title ? title : "Page not found"} | GPTSave`}
        description="Page not found. 404"
      />

      <div className="contain">
        <div
          id="NotFound"
          className="NotFound  px-4 d-flex justify-content-center align-items-center col-12 col-md-9">
          <div>
            <h1>Page not found</h1>
            <h2 className="col-9">
              <em>Sorry </em> 😔— we couldn't find what you were looking for.
            </h2>
            <p>
              <strong>Need help finding something?</strong> <br /> Email
              contact@projet-soc.tn and we'll help you.
            </p>
            <a href="/">Home</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notfound
