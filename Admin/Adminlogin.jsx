import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin(){
const Navigate = useNavigate()
const [email,setEmail]=  useState()
const[password,setPassword]=  useState()


    const handleSubmit = () => {
    if(email=="abc@gmail.com"&&password=="12345678")
        Navigate('')

 }
    return(
  
  <form onSubmit={handleSubmit}>
                    <div class="login">
                        <h2>Admin Login</h2>

                      <div class="border-box">
                            <label> E-mail</label>
                           
                            <input type="text"
                                value ={email}
                                onChange={(e) => setEmail(e.target.value)}
                             />
                             <label>Password</label>
                            <input type="password"
                                
                               value= {password}
                                onChange={(e) => setPassword(e.target.value)}
                               />
                            <button class="btnmail" type="submit"> Continue with E-mail</button>
                        </div>

                    </div>
    </form>






    )

}

export default AdminLogin;