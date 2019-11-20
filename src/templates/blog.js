import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from '@contentful/rich-text-types';
import { FacebookShareButton, TwitterShareButton, RedditShareButton, EmailShareButton } from 'react-share'

import Layout from "../components/layout"
import Head from "../components/head"

import styles from "./blogPage.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      
      headImage {
        file {
          url
        }
      }
      typeImage {
        file {
          url
        }
      }
      artistName
      title
      publishedDate(formatString: "l")
      spotifyLink
      soundcloudLink
      facebookLink
      instagramLink
      youtubeLink
      
      body {
        json
      }

    }
  }
`

const Blog = props => {
  
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        console.log("NOOOOODE", node);
        return <img alt={alt} src={url} />
      }
    },
    renderMark: {
      [MARKS.CODE]: embedded => <span dangerouslySetInnerHTML={{ __html: embedded }} />
    }
  }
  const data = props.data.contentfulBlogPost;

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
      {data.headImage ? <img className={styles.headerImage} src={"https:" + props.data.contentfulBlogPost.headImage.file.url} /> : null }
      <div className={styles.mainBody}>
      <div className={styles.socialShare}>
            <p className={styles.socialShare__text}>Share to social</p>
            <div className={styles.socialShare__icons}>
               <FacebookShareButton url={window.location.replace}>
                  <img src={"../facebook.png"} />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.replace}>
                  <img src={"../twitter.png"} />
                </TwitterShareButton>
                <RedditShareButton url={window.location.replace}>
                  <img src={"../reddit.png"} />
                </RedditShareButton>
                <EmailShareButton url={window.location.replace}>
                   <img src={"../email.png"} />
                </EmailShareButton> 
            </div>
          </div>
          {data.typeImage ? <img src={"https:" + props.data.contentfulBlogPost.typeImage.file.url}/> : null }
          
          <p className={styles.publishedDate}>{props.data.contentfulBlogPost.publishedDate.slice(0, 2) + "." + props.data.contentfulBlogPost.publishedDate.slice(3, 5) + "." + props.data.contentfulBlogPost.publishedDate.slice(-2)}</p>
          <h1 className={styles.test}>{props.data.contentfulBlogPost.title}</h1>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          <div className={styles.followArtists}>
            <p className={styles.followArtists__text}>Follow {data.artistName}</p>
            <div className={styles.followArtists__icons}>
                {data.spotifyLink ? <a href={data.spotifyLink}><img src={"../spotify.png"} target="_blank"></img></a> : null}
                {data.soundcloudLink ? <a href={data.soundcloudLink}><img src={"../soundcloud.png"}></img></a> : null}
                {data.facebookLink ? <a href={data.facebookLink}><img src={"../facebook.png"}></img></a> : null}
                {data.twitterLink ? <a href={data.twitterLink}>Twitter</a> : null}
                {data.instagramLink ? <a href={data.instagramLink}><img src={"../instagram.png"} target="_blank"></img></a> : null}
                
            </div>
          </div>
      </div>
      <div className={styles.backHome}>
       <Link to="/">
           <p>Back to home</p>
        </Link>
      </div>
      
      {/* {props.data.contentfulBlogPost.twitterLink ? <a href={props.data.contentfulBlogPost.twitterLink}>Tweet</a> : null } */}
    </Layout>
  )
}

export default Blog
