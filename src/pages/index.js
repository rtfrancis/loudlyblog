import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import BlogPage from './blog';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <BlogPage />
        </Layout>
    )
}

export default IndexPage