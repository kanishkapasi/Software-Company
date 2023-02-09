import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useHistory} from 'react-router-dom'

// Import Images
import homeImage from '../icons/Home.png';
import creative from '../icons/creative.png';
import innovation from '../icons/innovation.png';
import optimized from '../icons/optimized.png';

// Import Css File
import './Home.css'

// let history =useHistory();
 


function Home() {

  const [goToAbout,setGoToAbout]=useState(false)

  if(goToAbout){
    return <Navigate to={'/About'} />
  }

  // const [goToContact,setGoToContact]=useState(false);

  //   if(goToContact){
  //     return <Navigate to={'/Contact'} />
  //   }

  return (
    <div className='container'>
      {/* Upper Body */}
      <div className="upperBody">
        <div className="homeLeft">
          <h1>We Build<span> Mobile Apps</span> <br /> And <br /><span>Web Applications</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Ab laborum sed nulla assumenda perferendis ratione quam corrupti<br /> porro fugit quisquam, aliquid nesciunt sit  veniam nostrum dicta <br /> doloribus unde. Sint, alias?</p>
          <button onClick={()=>{
            setGoToAbout(true)
          }}> 
              More Info
          </button>
          <button className='btnOne' style={{
            height:"40px"
          }}>
              <Link to={'/Contact'} className="a">Contact US</Link>
          </button>
        </div>
        <div className="homeRight">
          <img src={homeImage} alt="" />
        </div>
      </div>

      {/* Lower Body */}
      <div className="lowerBody" style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:"50px"
      }}>
        <div className="items">
          <img src={creative} alt="" className='image' />
          <h3>Creative Ideas</h3>
          <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Sint aspernatur molestiae veniam <br/>esse rem eligendi accusamus similique<br/> nesciunt earum in.</p>
        </div>
        <div className="items">  
          <img src={innovation} alt="" className='image' />
          <h3>Innovation Tools</h3>
          <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Sint aspernatur molestiae veniam <br/>esse rem eligendi accusamus similique<br/> nesciunt earum in.</p>
        </div>
        <div className="items">
          <img src={optimized} alt="" className='image'/>
          <h3>Goal Achievement</h3>
          <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Sint aspernatur molestiae veniam <br/>esse rem eligendi accusamus similique<br/> nesciunt earum in.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
