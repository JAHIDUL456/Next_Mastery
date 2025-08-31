'use client'
import React from 'react'
import { useState } from 'react'



const Page = () => {

  const [count,setCount]= useState<number>(0);

  const handle=()=>{
    setCount(count+1);
  }


  return (
    <div>
      <h1>Here is the about section</h1>

      <button onClick={handle}>
        
press
      </button>

      <span>{count}</span>







    </div>
  )
}

export default Page