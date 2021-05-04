import React, { Component } from 'react';
import Layout from "../components/layout"
import AddBooks from './add.books';

const ViewBooks = (props) =>
{
    const books = {}
    const savedatahandler = (entereddata) =>{  
const data = {
    ...entereddata
};
props.onAddData(data);
  }
        return (
       
             <AddBooks onSaveData ={savedatahandler} />
       
        );
    }
    
export default ViewBooks;



