import React from "react"
import { SEO } from "../../components"
import "./not-found.css"

const Notfound = () => {
  return (
    <>
      <SEO
        title="Page not found | Melkart JE"
        description="Page non trouvée. 404"
      />

      <div className="contain">
        <div
          id="NotFound"
          className="NotFound  px-4 d-flex justify-content-center align-items-center col-12 col-md-9">
          <div>
            <h1>Page not found</h1>
            <h2 className="col-9">
              <em>Désolé</em> 😔— Nous n'avons pas pu trouver ce que vous
              cherchiez
            </h2>
            <p>
              <strong>
                Vous avez besoin d'aide pour trouver quelque chose ?
              </strong>{" "}
              <br /> Envoyez un courriel à contact@projet-soc.tn et nous vous
              aiderons.
            </p>
            <a href="/">Accueil</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notfound
