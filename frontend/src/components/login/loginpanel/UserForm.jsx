import "./userform.css"
import React from 'react'
import { useState } from "react"
export default function UserForm({handleNewUser}) {
const [newUser, setNewUser] = useState({});

const handleSubmit = (e)=>{

    e.preventDefault();
    handleNewUser(newUser)

}

const handleChange = (e)=>{

    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });

}
    return (
        <div className="user-form-wrap">
 
        <form onSubmit={handleSubmit} className="userform">

            <div className="form-fields">
            <label>Enter full name</label>
                <div className="user-name form-box inp">
                    
                    <input type="text" onChange={handleChange} name="name" placeholder="Enter your full name" required />
                </div>
                <label>Enter password</label>
                <div className="user-psw form-box inp">
                    
                    <input type="password" onChange={handleChange} name="password" placeholder="pasword" required />
                   
                </div>
                <p>Must be Atleast 8 characters in length and should contain atleast one alphabet,one number and one special character @$!%*#?&</p>
                <div className="save-btn">
                    <input className="cbtn" type="submit" value="SAVE AND CONTINUE" />
                </div>

            </div>
      
        </form>
        </div>
    )
}
