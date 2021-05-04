import React from "react"

const View = (props) => {
    const Books =[
        {bookname:"xyz",
    author:"ggg",
subject: "hhh"}
    ]
    const onAddData = (data) => {

    }
    return(
        <div>
            <View onSaveData ={onAddData}></View>
            <div>
        <h2>{props.bookname}</h2>
        <div >${props.amount}</div>
      </div>
            <p>hhhh</p>
        </div>
    )
}

export default View;
