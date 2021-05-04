/* import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Layout from "../components/layout"

const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
  query {
    backgroundImage123: file(relativePath: { eq: "books.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 2000,
         quality: 50,
      
        )
      }
    }
  }
  `
  )

const pluginImage = getImage(backgroundImage123)
return (
<Layout>
<BgImage image={pluginImage} className="masthead" >
    Test
</BgImage>
</Layout>
)
}
export default GbiBridged;
 */