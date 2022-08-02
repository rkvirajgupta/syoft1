
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './SignUp.css';

export const Signup =()=>{
const [form,setForm] = useState({
    userName:"",
    phone:"",
    email:"",
    password:"",
    role:""
})

const nav = useNavigate()
const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({
        ...form,
     [name]:value
    })
}
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    fetch('http://localhost:4700/user/login',{
        method: "POST",
        headers: {
           "content-type": "application/json",
        },
        body: JSON.stringify(form),
     });
    alert('signup success')
    nav("/login")

}


    return <div id='former'>
        <p id='login'>Signup</p>

        <form  action="" onSubmit={handleSubmit}>
            <label htmlFor="">userName: </label>
            <input  required type="text" name="userName" placeholder="Enter your UserName" onInput={handleChange}/>
           <br />
            <label id='inp3' htmlFor="">Phone: </label>
            <input  required type="text" name="phone" placeholder="Enter your phone" onInput={handleChange}/>
<br />
       <label id='inp2'>Email : </label>

        <input  required type="text" name="email" placeholder="Enter your email" onInput={handleChange}/>
        <br />
        <label id='inp1'> Password {"   "}:{" "}</label>
        <input required type="password" placeholder="Enter your password" name="password" onInput={handleChange}/>
        <br />
        <input type="submit" id="btn" value="Register" />
        </form>
    </div>
}