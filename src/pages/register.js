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
    backgroundImage123: file(relativePath: { eq: "bk3.jpg" }) {
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
      
          <div className={styles.container}>
            <h1>STUDENT SIGN UP</h1>
            <h6>Please fill in the form to create account!</h6>
            <Form>

            <div class="form-group">
                             {/* <div class="form-row">
                                 <div class="row"> */}
                                  <div class="form-group">
    <div class="form-group" className={styles.div7}>
      <input className={styles.box1} type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="form-group"className={styles.div7}>
      <input className={styles.box1} type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>

  <div class="form group"className={styles.div7}>
    <input className={styles.box1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
    <div id="text" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="form-group" className={styles.div7}>
    <input  type="password" class="form-control" id="exampleInputPassword1" placeholder="password"/>
  </div>

  <div class="form-group"className={styles.div7}>
    <input  type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>


  <div class="form-group form-check" className={styles.div5}>
                <input className={styles.div1} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label className={styles.div1} class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
  <button className={styles.div6} type="submit">Sign Up</button>
  </div>

            </Form>
          </div>
       
      </Layout>
    </>
</BgImage>

)

}

export default GbiBridged;