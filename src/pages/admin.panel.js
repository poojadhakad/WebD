import React from "react"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"
import * as styles from "./login.module.css"
import {Link} from 'gatsby'
const AdminPanel = () =>{
    return (
        <>
        <Layout>
           <div className="container">

           <div className={styles.container}>
            <h1>ADMIN PANEL</h1>

            <div className="col gap-3 p-2 mx-auto" style={{ width: '200px' }}>
              <div className="row gap-3 p-2">
                <Button variant="outline-primary" block><Link to="/add.books">Add Books</Link></Button>
              </div>

              <div className="row gap-3 p-2">
                <Button variant="outline-primary" block><Link to="/view.books">View Books</Link></Button>
              </div>
              <div className="row gap-3 p-2">
                <Button variant="outline-primary" block>Update Books</Button>
              </div >

              
              <div className="row gap-3 p-2">
                <Button variant="outline-success" block> LOGOUT</Button>
              </div >
            </div>
          </div>
        </div>
            </Layout>
        </>
    )
}
export default AdminPanel ;
