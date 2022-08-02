
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css';

export const Login =()=>{
const [form,setForm] = useState({
    email:"",
    password:""
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
    alert('login success')
    nav("/product")

}


    return <div id='former'>
        <p id='login'>Login</p>
        <form  action="" onSubmit={handleSubmit}>
       <label id='inp2'>Email : </label>

        <input  required type="text" name="email" placeholder="Enter your UserName" onInput={handleChange}/>
        <br />
        <label id='inp1'> Password {"   "}:{" "}</label>
        <input required type="password" placeholder="Enter your password" name="password" onInput={handleChange}/>
        <br />
        <input type="submit" id="btn" value="Sign in" />
        </form>
    </div>
}