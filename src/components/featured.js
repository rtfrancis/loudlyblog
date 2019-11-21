import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";



import featuredStyles from "./featured.module.scss"



const Featured = props => {
    const data = useStaticQuery(graphql`
    query{
      contentfulBlogPost(typeTag: { eq: "featured" }) {
        slug
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
      }
    }
  `)

  console.log(data.contentfulBlogPost);
 
  

  return (
    <Link to={`/blog/${data.contentfulBlogPost.slug}`}>
    <div className={featuredStyles.featuredContainer}>
        <img src={data.contentfulBlogPost.headImage.file.url} className={featuredStyles.featuredContainer__image}/> 
        <img src={data.contentfulBlogPost.typeImage.file.url} className={featuredStyles.featuredContainer__type}/>
        <h2 className={featuredStyles.featuredContainer__title}>{data.contentfulBlogPost.title}</h2>
    </div>
    </Link>
  )
}

export default Featured
