import axios from 'axios';
import React from 'react'

export default function AdminPage() {
    const submit=(e)=>{
        e.preventDefault();
        let email=document.getElementById("email").value;
        let pwd = document.getElementById("pwd").value;

        let obj={
            email:email,
            pwd:pwd
        }

        axios.post("http://localhost:7000/admin",obj).then((data)=>{
            console.log(data)
            window.location.assign('/dashboard')
        }).catch((error)=>{
            console.log(error)
            alert(error.response.data)
        })
    }
  return (
    <div>
          AdminPage
          <form>
            <label>Email</label>
            <input type="email" placeholder='email' id="email" />
            <br></br>

              <label>Password</label>
              <input type="password" placeholder='password' id="pwd" />
              <br></br>

              <input onClick={submit} type="submit" value="Login" />
          </form>
    </div>
  )
}
