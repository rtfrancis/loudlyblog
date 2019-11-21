import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from "../components/head"
import Featured from "../components/featured"
// import Sorting from "../components/articles"
import Testing from "../components/sortingNew"

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
    //             edges {
    //                 node {
    //                     title
    //                     slug
    //                     publishedDate(formatString: "l")
    //                     typeImage {
    //                         file {
    //                           url
    //                         }
    //                       }
    //                       coverImage {
    //                         file {
    //                           url
    //                         }
    //                       }
    //                       previewText
    //                 }
    //             }
    //         }
    //     }
    // `)
    // console.log(data.allContentfulBlogPost.edges)
    
    // console.log("testing: ", this)
    return (
        
        <div>
            <Head title="Blog"/>
            <Featured />
            <Testing />
        </div>
            
      
    )
}

export default BlogPage