import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// import Layout from '../components/layout'
import blogStyles from './articles.module.scss'
import Head from "./head"


const Articles = props => {
    console.log("INSIDE ARTICLES GETTING PROPS", props);
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "l")
                        typeTag
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
    let newData = ""
    // console.log("all inside search", data.allContentfulBlogPost.edges.filter(each => each.node.typeTag == props.typeValue))
    // let newData = data.allContentfulBlogPost.edges;
    console.log("HAPPENING", data.allContentfulBlogPost.edges);
    if(props.typeValue !== "all"){
        console.log("this is in all");
        newData = data.allContentfulBlogPost.edges.filter(each => each.node.typeTag == props.typeValue);
    } else {
        console.log("HAPPENING", data.allContentfulBlogPost.edges);
    }
    
        return (
            <div>
                <div className={blogStyles.postContainer}>
                    
                    {newData ? newData.map((edge) => {
                        return (
                            <div key={Math.random()} className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <div className={blogStyles.cover}> 
                                        {edge.node.typeImage ? <img src={edge.node.typeImage.file.url} className={blogStyles.cover__type} alt="article type"/> : null}
                                        {edge.node.coverImage ? <img src={edge.node.coverImage.file.url} className={blogStyles.cover__image} alt="cover image"/> : null}
                                        <img src={"../gradient.png"} className={blogStyles.cover__gradient} alt=""/>
                                    </div>
                                    
                                    <h2>{edge.node.title}</h2>
                                    <p className={blogStyles.previewText}>{edge.node.previewText}</p>
                                    <p className={blogStyles.publishedDate}>{edge.node.publishedDate.slice(0, 2) + "." + edge.node.publishedDate.slice(3, 5) + "." + edge.node.publishedDate.slice(-2)}</p>
                                </Link>
                            </div>
                        )
                    }) : data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <div key={Math.random()} className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <div className={blogStyles.cover}> 
                                        {edge.node.typeImage ? <img src={edge.node.typeImage.file.url} className={blogStyles.cover__type} alt="article type"/> : null}
                                        {edge.node.coverImage ? <img src={edge.node.coverImage.file.url} className={blogStyles.cover__image} alt="cover image"/> : null}
                                        <img src={"../gradient.png"} className={blogStyles.cover__gradient} alt=""/>
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
    


export default Articles