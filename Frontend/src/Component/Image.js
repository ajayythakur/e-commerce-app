import React, { useEffect, useState } from 'react'
import img1 from './../Images/img1.jpg'
import img2 from './../Images/img2.jpg'
import img3 from './../Images/img3.jpg'
import img4 from './../Images/img4.png'
import img5 from './../Images/img5.png'

const Image = () => {
    const[img,setImg]=useState(0);
    const[allimg]=useState([img1,img2,img3,img4,img5])

    useEffect(()=>{
        setInterval(()=>{
            setImg(img=>img<4 ? img+1:0)

        },2000)
    },[])
  return (
    <div className='image'>
        <img src={allimg[img]} alt='404' className='slider'></img>
    </div>
  )
} 

export default Image