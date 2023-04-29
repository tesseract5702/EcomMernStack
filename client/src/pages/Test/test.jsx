import React from 'react'
import axios from 'axios'

export default function test() {

    axios.get("http://localhost:3000/test",{withCredentials:true})
    .then((res)=>{
      console.log(res);
    })

  
  return (
    <div>Hello</div>
  )
}
