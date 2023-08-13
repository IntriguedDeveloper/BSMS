import React from "react";
export default function DeleteExistingStudent(){
    return(
        <>
            <div className="deletePageContainer">
                <div className="deletePage">
                    <input className="nameIn" type="text" placeholder="Name "></input>
                    <input className="rollIn" placeholder="Roll No. " type="number"></input>
                    <input className="buttonC"></input>
                </div>
            </div>
        </>
    )
}