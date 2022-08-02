import { useEffect } from "react"
import { useState } from "react"

import './userdata.css'



export const UserData = ()=>{
    const [data,setData]  = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{

        let data = await fetch("http://localhost:4700/product/data")
        let newdata = await data.json()

        console.log(newdata)
        setData(newdata)

    }
   

    return <div id="user">
         
         {
            data.map((e)=>{
                return <div id='demonstate'>
                    <p>Name:{e.productName}</p>
                    <p>Price:{e.price}</p>
                    <p>About:{e.description}</p>
                </div>
            })
         }
        
    </div>
}