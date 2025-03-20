import React, { useState } from 'react'

export default function Acordial(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })

    const [btnTxt, setBtnTxt] = useState("Enable dark mode");

    // const handlestyle = () => {
    //     if(myStyle.color === 'black') {
    //         setMyStyle({color: 'white', backgroundColor: "black"});
    //         setBtnTxt("Enable light mode");
    //     }
    //     else {
    //         setMyStyle({ color:'black', backgroundColor: 'white' })
    //         setBtnTxt("Enable dark mode");
    //     }
    // }

  return (
    <>
    <div className='container my-3 '>
    <div className={`card m-2 bg-${props.mode === 'dark'? 'secondary': 'light'} text-${props.mode === 'dark'? 'white': 'black'}`}>
  <h5 className="card-header">About Us</h5>
  <div className="card-body">
    <h5 className="card-title">The Text Master Team</h5>
    <p className="card-text">At Text Master, we are a passionate team of developers dedicated to creating smart and efficient text manipulation tools. Our mission is to simplify text formatting, making it easy for everyone to transform text effortlessly..</p>
    <p className="card-text">We believe in building tools that enhance productivity and make daily tasks easier. With expertise in React, Bootstrap, and modern web technologies, we continuously improve Text Master to provide a seamless user experience.</p>
    <button type="button" className="btn btn-primary">{btnTxt}</button>
  </div>
</div>
</div>
 </>
  )
}
