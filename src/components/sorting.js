import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";



import sortingStyles from "./sorting.module.scss"



const Sorting = props => {
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

//   console.log(data.contentfulBlogPost);
 
  

  return (
    <div>
        <ul>
            <li>all</li>
            <li>cubed</li>
            <li>id-x</li>
            <li>interviews</li>
            <li>reviews</li>
            <li>premieres</li>
        </ul>
    </div>
  )
}

export default Sorting
