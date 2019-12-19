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
        <img className={headerStyles.logo} src={'../loudly-mag-logo.png'} /> 
      </Link>

      <nav className={headerStyles.navSection}>
        <span className={headerStyles.item1}>
          <a target="_blank"
                className={headerStyles.navIcon}
                href="https://www.loudly.com"
              >
                <img src={"../loudly-icon.png"} />
          </a>
        </span>
        <span className={headerStyles.item2}>
          <a   target="_blank"
                className={headerStyles.navIcon}
                href="https://www.youtube.com/c/loudlytv"
              >
                <img src={"../youtube.png"} />
          </a>
        </span>
        <span className={headerStyles.item3}>
          <a target="_blank"
                className={headerStyles.navIcon}
                href="https://www.instagram.com/getloudly/"
              >
                <img src={"../instagram.png"} />
          </a>
        </span>
        <span className={headerStyles.item4}>
          <a target="_blank"
                className={headerStyles.navIcon}
                href="https://www.twitter.com/getloudly"
              >
                <img src={"../twitter.png"} />
          </a>
        </span>
        {/* <p className={headerStyles.getApp}>GET THE APP</p> */}
        <a className={headerStyles.item5} href="mailto:social@justaddmusic.net?subject=Loudly Mag Music Submission" target="_blank">
            <p className={headerStyles.submitMusic}>SUBMIT YOUR MUSIC</p>
        </a>
      </nav>
      </div>
      {/* <img className={headerStyles.blogLogo} src={"../blog.png"} /> */}
    </header>
  )
}

export default Header
