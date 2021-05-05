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
    backgroundImage123: file(relativePath: { eq: "lib22.jpg" }) {
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
            <h1>STUDENT LOGIN</h1>
            <Form>

              <div class="form-group" className={styles.div1}>

                <label className={styles.div2} for="exampleInputEmail1">Email address</label>
                <div className={styles.email}>
                  <input className={styles.box} type="email" class="form-control" id="exampleInputEmail1" aria-label="large" aria-describedby="emailHelp" placeholder="Enter email"></input>

                  <small className={styles.div3} id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.</small>
                </div>
              </div>
              <div class="form-group" className={styles.div5}>
                <label className={styles.div2} for="exampleInputPassword1">Password</label>
                <input className={styles.box1} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-group form-check" className={styles.div5}>
                <input className={styles.div1} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label className={styles.div1} class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button className={styles.div6} type="submit" >Login</button>

            </Form>
          </div>
       
      </Layout>
    </>
</BgImage>

)

}

export default GbiBridged;