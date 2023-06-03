import React, { useState } from "react";
import style from "./homecrud.module.css"  
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const  Createuser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let goto=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandel=(e)=>{
        // e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATAHAS BEEN ADDED...");
        })
        .catch(()=>{
            console.log("SOMETHIMG WENT WRONG...");
        })
        goto('/user')
    }
    return(
        <div id={style.myForm}>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={nameData} />
                <label>Salary</label>
                <input type="text" value={salary} onChange={salaryData}/>
                <label>Company</label>
                <input type="text" value={company} onChange={companyData}/><br/>
                <button onClick={formHandel}>Submit</button>
            </form>
        </div>
    )
}
export default Createuser; 