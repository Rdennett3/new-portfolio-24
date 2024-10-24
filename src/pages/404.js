import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <section className="error-container">
        <div className="error-wrapper">
          <h1>Well, shucks...Looks like there's nothing here</h1>
          <a href="/" className="featured-btn">Go on, git!</a>
        </div>
      </section >
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Uh Oh</title>
