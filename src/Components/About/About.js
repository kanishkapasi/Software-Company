import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

// Import Images
import aboutOne from '../icons/About.png';
import developing from '../icons/developing.png';
// import aboutTwo from '../icons/AboutHead.png';

// Import Css File
import './About.css'

function About() {

  const [goToContact,setGoToContact]=useState(false);

  if(goToContact){
    return <Navigate to={'/Contact'} />
  }
  return (
    <div className='aboutContainer'>
      <div className="image">
        <h1>About Us</h1>
      </div>
      <div className="aboutContent">
        <div className="aboutLeft">
          <img src={aboutOne} alt="" style={{
            width:"400px"
          }} />
        </div>
        <div className="aboutRight">
          <h1>We Are ...</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae quisquam deleniti explicabo, beatae minima odit ipsa itaque sed modi veritatis vitae. Doloremque sed dolores nesciunt voluptatem amet explicabo fugiat iure facere </p>
          <p>ipsa, sequi omnis libero assumenda eius nobis sunt at cumque vero reiciendis vel quas harum suscipit perferendis veniam? Sint cumque tempore ullam id consequuntur? Illo blanditiis quasi eum iure impedit! Voluptatibus</p>
          <button onClick={()=>{
            setGoToContact(true)
          }}>Join Us</button>
        </div>
      </div>
      <div className="aboutSecondContent">
        <div className="secondLeft">
          <h1>We Can ...</h1>
          <p>repellendus itaque delectus ut nobis recusandae amet voluptatem error, commodi possimus, neque eveniet pariatur qui dolorum maxime doloribus dolor minus nesciunt. Culpa nihil at vel reiciendis ut suscipit eos, iure esse veniam mollitia? Laborum corporis quasi reiciendis?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ab architecto magni animi nulla assumenda, quibusdam maxime, quod hic sapiente velit numquam? Magni nihil repudiandae fugiat numquam ducimus! Aut earum nobis quisquam, id optio quidem repudiandae architecto iste magnam laboriosam porro veritatis repellendus sed dolorum assumenda ex saepe, cum blanditiis.</p>
          <button>Hire Us</button>
        </div>
        <div className="secondRight">
          <img src={developing} alt="" style={{
            width:'350px'
          }} />
        </div>
      </div>
    </div>
  )
}

export default About
