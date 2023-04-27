import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Styles/AboutPage.css'

export default function AboutPage() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('https://debasree-breand-radiator-backend.onrender.com/about').then((res) => {
            console.log(res.data.getAboutData[res.data.getAboutData.length - 1]);
            setData(res.data.getAboutData[res.data.getAboutData.length - 1])
        })
    }, [])


    return (
        <div className='about-container'>
            
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
