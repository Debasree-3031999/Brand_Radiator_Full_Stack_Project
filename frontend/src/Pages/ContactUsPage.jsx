import axios from 'axios';
import React from 'react'

export default function ContactUsPage() {

    const submit=(e)=>{
        e.preventDefault();
        let fName=document.getElementById("fName").value;
        let lName = document.getElementById("lName").value;
        let email = document.getElementById("email").value;
        let mNo = document.getElementById("mNo").value;
        let concern = document.getElementById("concern").value;

       let obj={
           firstName: fName,

           lastName:lName,

           email: email,

           contactNo: mNo,

           description:concern
       }
        axios.post("http://localhost:7000/form",obj).then((data)=>{
            console.log(data)
            window.location.assign('/')
        })
    }

    return (
        <div>
            ContactUsPage

            <form>
                <label>First Name :</label>
                <input type="text" placeholder='first name' id="fName" />
                <br></br>
                <label>Last Name :</label>
                <input type="text" placeholder='last name' id="lName" />
                <br></br>
                <label>Email :</label>
                <input type="email" placeholder='email' id="email" />
                <br></br>
                <label>Mobile No :</label>
                <input type="text" placeholder='mobile no' id="mNo" />
                <br></br>
                <label>Mention your Concern :</label>
                <input type="text" placeholder='mention your concern' id="concern" />
                <br></br>
                <input onClick={submit} type="submit" value="Submit" />
            </form>
        </div>
    )
}
