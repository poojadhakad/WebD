import React from "react"
import Layout from "../components/layout"
import Form from "react-bootstrap/Form"
import * as styles from "./login.module.css"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"


const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
  query {
    backgroundImage123: file(relativePath: { eq: "ll.jpg" }) {
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


<BgImage image={pluginImage} className="masthead" >
<>
      <Layout>
      
         
            <Form>

            <div className={styles.container}>
  <div class="container">
<h1>Feedback Form</h1>
<div class="form-group" className={styles.div7}>
      <input  className={styles.box1} type="text" class="form-control" placeholder="Name"/>
    </div>
<div class="form-group" className={styles.div7}>
  <input  className={styles.box1} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div class="form-group" className={styles.div7}>
      <input  className={styles.box1} type="text" class="form-control" placeholder="Banasthali ID"/>
    </div>
<div class="form-group" className={styles.div7}>
  <textarea  class="text" id="exampleFormControlInput1" rows="4" placeholder="Message"></textarea>
</div>
<button className={styles.div6} type="submit" >Submit</button>
</div>
</div>
            </Form>
         
       
      </Layout>
    </>
</BgImage>

)

}

export default GbiBridged;