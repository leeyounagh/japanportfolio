import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='logo_container'style={{width:"100%",height:"55px",fontSize:"1.2rem",
        display:"flex",justifyContent:'space-between'}}>
         
                <div style={{width:"100px",marginLeft:"50px"}} >
                    <a href='/' style={{textDecoration:"none"}}>       <span className='logo_1'>
                         S
                    </span>
                    <span className='logo_2'>
                         u
                    </span>
                   <span className='logo_3'>
                    y
                   </span>
                   <span className='logo_4'>
                    o
                   </span>
                   <span className='logo_5'>
                    e
                   </span>
                   <span className='logo_6'>
                    n
                   </span></a>
             
                </div>

<div style={{fontWeight:"500",marginTop:"10px"}}>
{/* <span style={{marginRight:"30px",fontWeight:"500"}}>
     <a href='about' style={{color:'black',textDecoration:"none",fontWeight:"700"}}>About</a>
                   
                  </span> */}
                  <a href='history' style={{color:'black',textDecoration:"none",fontWeight:"700"}}>  <span>
                    Project
                  </span></a>
                
</div>
               
                
             <div style={{marginRight:"50px",marginTop:"10px"}} >
            
                  <span style={{marginRight:"5px"}}>
                    <a href='https://github.com/leeyounagh?tab=repositories'>
                    <img alt='깃허브' src='https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png'
                    width='30px' height='30px'/>
                   
                    </a>
                  
                 
                  </span>
                  <span>
                    <a href='https://youtu.be/rUUOpThKH-c'  style={{color:'black',textDecoration:"none"}}> <img style={{borderRadius:"50px"}} alt='프로필'
                     src='image/프로필.jpg' width='30px' height='30px'></img> </a>
                   
                  </span>
                  
             </div>
          
        </div>
    );
};

export default Navbar;