import React, { useState } from "react"
import Layout from "../components/layout"



const AddBooks = (props) => {
    const [bookname, setbookname] = useState("");
    const [author, setauthorname] = useState("");
    const [subject, setsubject] = useState("");
    const booknamechangehandler = (event) => {
        setbookname(event.target.value)
    };
    const authornamechangehandler = (event) => {
        setauthorname(event.target.value)
    };
    const subjectchangehandler = (event) => {
        setsubject(event.target.value)
    };
    const submithandler = (event) => {
        event.preventDefault();

        const data = {
            bname: bookname,
            aname: author,
            sname: subject
        };

        props.onSaveDAta(data); {
            setbookname('');
            setauthorname('');
            setsubject('');
        };

    };

    return (
        <>
            <Layout>
                <div class="container my-3">
                    <h1>ADD BOOKS</h1>
                    <hr />
                    <form id="libraryForm" onSubmit={submithandler}>
                        <div class="form-group row">
                            <label for="bookName" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="bookName" placeholder="Book Name" value={bookname} onChange={booknamechangehandler} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="Author" class="col-sm-2 col-form-label">Author</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="author" placeholder="Author" value={author} onChange={authornamechangehandler} />
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Type</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="type" id="Electrical" value={subject} onChange={subjectchangehandler}
                                            checked />
                                        <label class="form-check-label" for="Electrical">
                                            Electrical Engineering
                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="type" id="programming"
                                            value="programming" />
                                        <label class="form-check-label" for="programming">
                                            Computer Engineering
                    </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" name="type" id="Mechatronics" value="Mechatronics" />
                                        <label class="form-check-label" for="Mechatronics">
                                            Mechatronics
                                         </label>
                                    </div>



                                </div>
                            </div>
                        </fieldset>

                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Add Book</button>
                            </div>
                        </div>
                    </form>
                </div>

            </Layout>
        </>
    )
}

export default AddBooks;

