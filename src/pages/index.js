import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup"/>
    </div>
    <h1>Learn to Design and Code React Apps</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage