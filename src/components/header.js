import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.topContainer}>
      <Link to="/">
        <img className={headerStyles.logo} src={'../logo.png'} /> 
      </Link>

      <nav className={headerStyles.navSection}>
        <Link
              className={headerStyles.navIcon}
              to="/"
            >
              <img src={"../youtube.png"} />
        </Link>
        <Link
              className={headerStyles.navIcon}
              to="/"
            >
              <img src={"../instagram.png"} />
        </Link>
        <Link
              className={headerStyles.navIcon}
              to="/"
            >
              <img src={"../twitter.png"} />
        </Link>
        <p className={headerStyles.getApp}>GET THE APP</p>
        <p className={headerStyles.submitMusic}>SUBMIT YOUR MUSIC</p>
      </nav>
      </div>
      <img className={headerStyles.blogLogo} src={"../blog.png"} />
    </header>
  )
}

export default Header
