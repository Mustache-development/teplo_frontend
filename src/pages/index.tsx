import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <h1>
        Тепло на передову
      </h1>  
      <h2>
        <Link to="/admin/">Admin</Link>
      </h2>

      <StaticImage
        alt="Gatsby G Logo"
        src="../images/photo1.jpg"
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
