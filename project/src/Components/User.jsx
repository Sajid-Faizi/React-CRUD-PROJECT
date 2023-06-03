import axios from "axios";
import style from './homecrud.module.css'
import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom"
 
  
const  User=()=>{
    let[content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((resp)=>{
            console.log(resp.data);
            setContent(resp.data)
        })
        .catch(()=>{
            console.log("there is no data ");
        })
    },[])
    let deleteData=(x)=>{
        axios.delete(`http://localhost:3000/users/${x}`)
        window.location.assign("/user")
    }
    return(
    <div id={style.userPage}>
       {content.map((x)=>{
        return(
            <div id={style.profile}>
                <table>
                    
                    <tr>
                        <th colSpan={2}>USER {x.id} <hr /></th> 
                    </tr>
                    <tr>
                        <td>NAME</td>
                        <td>:{x.name}</td>
                    </tr>
                    
                    <tr>
                        <td>SALARY</td>
                        <td>:{x.salary}</td>
                    </tr>
                    <tr>
                        <td>COMPANY</td>
                        <td>:{x.company}</td>
                    </tr>
                    <tr>
                        <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                        <td><button onClick={()=>{deleteData(x.id)}} >DELETE</button></td>
                    </tr>  
                </table>
            </div>
        )
       })}
    </div>
    )
}
export default User; 