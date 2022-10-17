import React from 'react';
import'./Main.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { DiVisualstudio } from 'react-icons/di';
import { BsMic } from 'react-icons/bs';




const Main = () => {
    return (
        <div style={{width:"100%",marginBottom:"50px",height:"120%",
       display:"flex",flexDirection:"column",alignItems:"center", position:"relative",top:"50px" }}>
          
            <div style={{width:"400px",height:"120px"}}>
                <span className='Main_logo_1'>
                         S
                    </span>
                    <span className='Main_logo_2'>
                         u
                    </span>
                   <span className='Main_logo_3'>
                    y
                   </span>
                   <span className='Main_logo_4'>
                    o
                   </span>
                   <span className='Main_logo_5'>
                    e
                   </span>
                   <span className='Main_logo_6'>
                    n
                   </span>
       
            </div>
            <div style={{width:"500px",height:"100px"}}>
                <div style={{position:"relative",
                top:"35px",left:"-220px",fontSize:"15px"}}>
                <AiOutlineSearch size='20px'></AiOutlineSearch></div>
                
            <input style={{width:"500px",height:"40px",
            border:"1px solid lightgray",borderRadius:"50px",
             boxShadow:"inset 0px 1px 5px 0 rgb(0 0 0 / 10%)"}} 
             placeholder></input>


 
             <div className='start_title' style={{ position:'absolute',zIndex:'50'
   ,left:'50%',
   top:'45%',width:'400px',height:'30px'}}> </div>
          

         <BsMic style={{position:'relative',
          top:"-30px",left:"230px"}}size='18px'></BsMic>
            </div> 
            {/* 검색창까지 */}
            <div style={{height:"80%",margin:'50px'}}>
            <div style={{width:"400px",height:"100px",
           display:"flex",justifyContent:'space-between'}}>
            
               <div style={{width:"50px",height:"50px",
                      borderRadius:"50px",background:"white"}}>
              <img width='45px' height='45px' 
              src='https://i.pinimg.com/736x/d5/73/2e/d5732ef24c8c3f3ad0132a61d0b0996a.jpg'>
              </img>
              <div style={{marginTop:"5px"}}>
                html
              </div>
               </div>
               <div  style={{width:"50px",height:"50px",
                      borderRadius:"50px",background:"white"}}>
                 <img style={{marginTop:'5px'}}width='40px' height='35px' 
              src='https://i.pinimg.com/564x/3f/83/9a/3f839a4a5688116dfb5f9f81eaa8d067.jpg'>
              </img>
              <div style={{marginTop:"8px"}}>
                Css
              </div>
               </div>
               <div style={{width:"50px",height:"50px",
                      background:"white"}}>
                      <img style={{marginTop:'5px'}} width='30px' height='35px' 
              src='https://i.pinimg.com/564x/0c/de/d3/0cded3a3276425911d55a2552bf361bf.jpg'>
              </img>
              <div style={{marginTop:"8px"}}>
               javascript
              </div>
                </div>
                <div style={{width:"50px",height:"50px",
                      }}>
                 <img style={{marginTop:'5px'}} width='30px' height='35px' 
              src='https://i.pinimg.com/564x/f5/b9/91/f5b9918f76b778e799b6aa54c270061e.jpg'>
              </img>
              <div style={{marginTop:"8px"}}>
                React
              </div>
               </div>
             
         
            </div>
            <div style={{width:"400px",height:"100px",
           display:"flex",justifyContent:"space-between"}}>
            
               
            <div style={{width:"50px",height:"50px",
                  marginTop:"10px"   }}>
               <img width='35px' height='35px' 
              src='https://i.pinimg.com/564x/f7/9a/93/f79a9399e188fce8f0c56645eeafe338.jpg'>
              </img>
              <div style={{marginTop:"8px"}}>
                Redux
              </div>
               </div>
             
               <div  style={{width:"50px",height:"50px",
                    }}>
                 <img style={{ marginTop:"10px" }}width='45px' height='45px' 
              src='https://i.pinimg.com/564x/24/a6/63/24a663052e771d440fa6555894a93595.jpg'>
              </img>
              <div style={{marginTop:"5px",fontSize:"13px"}}>
             MongoDB
              </div>
                </div>
                <div style={{width:"50px",height:"50px",
                     }}>
                     
                   <img style={{marginTop:'15px'}} width='30px' height='35px' 
              src='https://i.pinimg.com/564x/0d/73/13/0d73131414b74899a36cade5f3a7b1a7.jpg'>
              </img>
              <div style={{marginTop:"5px"}}>
             node.js
              </div>
                </div>
                <div style={{marginTop:"10px"}}>
                <DiVisualstudio size='40px' >

                </DiVisualstudio >
                    <div style={{marginTop:"5px"}}>
                    ...ing
                    </div>
             
                </div>
            
             
         
            </div>
            </div>
           
        </div>
    );
};

export default Main;