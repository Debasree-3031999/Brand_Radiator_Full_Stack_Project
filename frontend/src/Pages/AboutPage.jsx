import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AboutPage() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('http://localhost:7000/about').then((res) => {
            console.log(res.data.getAboutData[res.data.getAboutData.length - 1]);
            setData(res.data.getAboutData[res.data.getAboutData.length - 1])
        })
    }, [])


    return (
        <div>
            AboutPage
            {data.length == 0 ? <div>Loading...</div> : 
            <div>
                <h1>{data.header}</h1>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        
        }

            </div>
  )
}
