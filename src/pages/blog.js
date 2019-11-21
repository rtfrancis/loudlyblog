import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from "../components/head"
import Featured from "../components/featured"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "l")
                        typeImage {
                            file {
                              url
                            }
                          }
                          coverImage {
                            file {
                              url
                            }
                          }
                          previewText
                    }
                }
            }
        }
    `)
    console.log(data.allContentfulBlogPost.edges)
    const selected = null; 
    console.log("testing: ", selected)
    return (
        
        <div>
            <Head title="Blog"/>
            <Featured />
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
            <div className={blogStyles.postContainer}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <div key={edge.node.slug} className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <div className={blogStyles.cover}> 
                                    {edge.node.typeImage ? <img src={edge.node.typeImage.file.url} className={blogStyles.cover__type}/> : null}
                                    {edge.node.coverImage ? <img src={edge.node.coverImage.file.url} className={blogStyles.cover__image}/> : null}
                                    <img src={"../gradient.png"} className={blogStyles.cover__gradient}/>
                                </div>
                                
                                <h2>{edge.node.title}</h2>
                                <p className={blogStyles.previewText}>{edge.node.previewText}</p>
                                <p className={blogStyles.publishedDate}>{edge.node.publishedDate.slice(0, 2) + "." + edge.node.publishedDate.slice(3, 5) + "." + edge.node.publishedDate.slice(-2)}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
            
      
    )
}

export default BlogPage