import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DashBoardPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:7000/form").then((res) => {
            console.log(res)
            setData(res.data.getFormtData)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            DashBoardPage
            {data.length == 0 ? <div>Loading...</div> :
                <div>
                    {data.map((e,i)=>{
                        return <div key={i} >
                            <p>Name: {e.firstName} {e.lastName}</p>
                          
                            <p>email: {e.email}</p>
                            <p>contactNo: {e.contactNo}</p>
                            <p> concern: {e.description}</p>
                            <p>createOn: {e.createOn.slice(0,10)}</p>

                        </div>
                    })}
                </div>}
        </div>
    )
}
