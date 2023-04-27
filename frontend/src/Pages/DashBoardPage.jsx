import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../Styles/DashboardPage.css'

export default function DashBoardPage() {
    const [data, setData] = useState([]);
    // const [headers,setHeaders]=useState([])
    useEffect(() => {
        axios.get("http://localhost:7000/form").then((res) => {
            console.log(res.data.getFormtData)
            setData(res.data.getFormtData)
            
        }).catch((error) => {
            console.log(error)
        })
        
    }, [])



    const headers = data.length > 0 ? Object.keys(data[0]).filter(header => header !== '_id' && header !== 'modifiedOn').map(header => {
        if (header === 'firstName') {
            return 'First Name';
        }
        else if(header === "lastName"){
            return "Last Name";
        }
        else if (header === "email") {
            return "Email";
        }
        else if (header === "contactNo") {
            return "Mobile No";
        }
        else if (header === "description") {
            return "Concern";
        }
        else if (header === "createOn") {
            return "Date";
        }
        return header;
    }) : [];

    return <div>
        {data.length === 0 ? (
            <div>Loading...</div>
        ) : (
            <div>
                <table>
                    <thead>
                        <tr>
                            {headers.map(header => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row._id}>
                                {Object.keys(row).filter(header => header !== '_id' && header !== 'modifiedOn').map(header => (
                                    <td key={header}>
                                        {header === 'createOn' ? row[header].substring(0, 10) : row[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </div> 
                        
    }

 




    // return (
    //     <div>
    //         DashBoardPage
    //         {data.length == 0 ? <div>Loading...</div> :
    //             <div>
    //                 {data.map((e,i)=>{
    //                     return <div key={i} >
    //                         <p>Name: {e.firstName} {e.lastName}</p>
                          
    //                         <p>email: {e.email}</p>
    //                         <p>contactNo: {e.contactNo}</p>
    //                         <p> concern: {e.description}</p>
    //                         <p>createOn: {e.createOn.slice(0,10)}</p>

    //                     </div>
    //                 })}
    //             </div>}
    //     </div>
    // )
// }
