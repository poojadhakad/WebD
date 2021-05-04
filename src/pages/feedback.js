import React from "react"
import Layout from "../components/layout"
import * as styles from "./login.module.css"
const Feedback = () => {
  return (
    <>
 <Layout>
 <div className={styles.container}>
  <div class="container">
<h1>Feedback Form</h1>
<div class="form-group" className={styles.div7}>
      <input type="text" class="form-control" placeholder="Name"/>
    </div>
<div class="form-group" className={styles.div7}>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div class="form-group" className={styles.div7}>
      <input type="text" class="form-control" placeholder="Banasthali ID"/>
    </div>
<div class="form-group" className={styles.div7}>
  <textarea class="text" id="exampleFormControlTextarea1" rows="7" placeholder="Message"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</div>
</div>
      </Layout>
    </>
  )
}
export default Feedback;