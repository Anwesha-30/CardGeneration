import React from 'react'
import { MoveUpRight } from "lucide-react";
const LeftContent = () => {
  return (
    <div className='h-full flex w-1/4 bg-blue-300 '>
      <div>
        <h3 className='mb-5 text-4xl font-bold'>Prospective <br/><span>Customer </span><br/>segmentation</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores, praesentium inventore nesciunt incidunt error sint odit reiciendis cumque delectus.</p>
      </div>
      <div>
        <MoveUpRight className="w-16 h-16 text-black transition-transform hover:translate-x-1 hover:-translate-y-1" />

      </div>
    </div>
  )
}

export default LeftContent
