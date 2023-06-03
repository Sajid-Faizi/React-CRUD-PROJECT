import React from "react"
import Homecrud from './Components/Homecrud';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createuser from "./Components/Craeteuser";
import User from "./Components/User";
import Editusers from "./Components/Editusers"

 
const App=()=>{
    return(
        <div>
           <BrowserRouter>
           <Homecrud/>
           <Routes>
             <Route element={<Createuser/>} path='/'/>
             <Route element={<User/>} path='/user'/>
             <Route element={<Editusers/>} path='/edit/:abc'/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App;