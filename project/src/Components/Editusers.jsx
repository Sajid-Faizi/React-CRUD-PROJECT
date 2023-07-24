import React, { useEffect, useState } from "react";
import style from "./homecrud.module.css"
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
 

const Editusers = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let{abc} =useParams()
    useEffect(( )=>{
        axios.get(`http://localhost:3000/users/${abc}` )
        .then((resp)=>{
             setName(resp.data.name)
             setSalary(resp.data.salary)
             setCompany(resp.data.company)
        })
        .catch(()=>{
            console.log("SOMETHING WENT WRONG...");
        })
    },[abc])

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let navigate=useNavigate()

    let formHandel=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/users/${abc}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN UPDATED...");
        })
        .catch(()=>{
            console.log("SOMETHIMG WENT WRONG...");
        })
        navigate('/user')
    }
    return (
        <div id={style.myForm}>
            <form>
                <h4>UPDATE USER</h4>
                <label>Name</label>
                <input type="text" value={name} onChange={nameData} />
                <label>Salary</label>
                <input type="text" value={salary} onChange={salaryData} />
                <label>Company</label>
                <input type="text" value={company} onChange={companyData} /> 
                <button id={style.updateBtn} onClick={formHandel}>Update</button>
                 
            </form>
        </div>
    )
}
export default Editusers
