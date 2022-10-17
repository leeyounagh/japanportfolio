import React, { useState } from 'react';
import './About.css'

const About = () => {

  const [skill,setSkill] =useState([{name:"HTML,CSS,REACT",gage:"80%",progress:'progress-bar',
 progressbg:"progress-bg"},
     {name:"Js,REDUX",gage:"75%",
     progress:'progress-bar1',
     progressbg:"progress-bg1"},{name:"MONGODB,NODEJS",gage:"60%",
     progress:'progress-bar2',
     progressbg:"progress-bg2"}])


    const progressBar = () =>{
      return (
        <div style={{display:"grid"}}>
          {
            skill.map((item)=>{
              return(
                <div style={{margin:"30px"}}>
            
                <h3>  {item.name}  {item.gage}</h3>
              
                <div>
            
                <div class={item.progressbg}>
             
            <div class={item.progress}>
        
                <h3 class="raised"></h3>
              </div>
                
                <h3 class="goal"></h3>
          </div>
                  
                </div>
                </div>
              )
            
            })
          }
               

        </div>
      )
    }
    
    return (
        <div className='About_font'>
      
         
                    <div style={{display:"flex",justifyContent:"center",}}>
           <div style={{width:"80%",height:"600px",margin:'50px'}}>
           <h1>SKILLS</h1>
            
       {
        progressBar()
       }
       
     



                </div>
            </div>


        <div className="wrap" style={{height:"500px"}}>
        <div class="tile"> 
          <img src='./image/포폴1.jpg'/>
        
          <div class="text">
          <h1 >patience</h1>
          
          
         <h2 class="animate-text">patience</h2>
          <p class="animate-text">何がを勉強することが好きです。
      そのおかげで、今まで決まった業務や資格を最後まで最善を尽くして、
      良い結果を達しました。 </p>
          <h2 style={{textAlign:"center"}}></h2>
        <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        </div>

        <div class="tile"> 
          <img src='./image/포폴4.jpg'/>
          <div class="text">
          <h1>challenge spirit</h1>
          <h2 class="animate-text">challenge spirit</h2>
          <p class="animate-text">새로운것을 배우고 알아가는것을 좋아하고 제자신이 성장하는것을 좋아하는사람입니다.
          코딩을 시작한것은 2022년 3월 부터 였습니다. 2021년도에 대학을 졸업하고 일본 지상직에 내정이 되었지만,
           코로나로 인하여 무한 대기 상태에 놓여있었고 쉬는 동안 자격증을 따며 대기 하던도중, 개발자 동생에게 
           생활코딩을 추천받았습니다.그때 저는 취미로 시작하였으나 코딩이 너무 재밌어서 진로를 변경하였고,
           독학으로 지금까지 공부중 입니다.</p>
          <h1></h1>
        <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        </div>
        <div class="tile"> 
          <img src='./image/포폴2.jpg'/>
          <div class="text">
         <h1>
         problem-solving ability
         </h1>
        <h2 class="animate-text"> 문제해결을 좋아하는사람</h2>
          <p class="animate-text">무언가를 끝까지 해내고 난뒤에 느끼는 성취감이 너무 좋습니다.
           프로젝트를 제작하거나, 코딩 연습할때, 오류가 나는 경우가 굉장히 많았습니다. 그때 스스로 
           검색하고 공부하면서 해결해낸후 느끼는 성취감이나, 제가 머리속으로 상상한것이 직접 코딩을 함으로써
           결과물로 나타나는것이 매우 좋습니다.</p>
          {/* <h1>Lorem ipsum.</h1> */}
        <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        </div>

</div>









           {/* <div style={{margin:"150px",display:"flex",justifyContent:'center',}}>
            <div style={{
            width:"80%",height:"300px",display:'flex',justifyContent:"space-around",}}>
              <span>
              <img alt='증명사진' src='image/증명사진.jpg'
                  style={{width:'200px',height:"300px"}}></img>   
              </span>
                
                  <span>
                    <h2>프로필</h2>
                  
                    <h3>2019.02~2021.02 한국방송통신대학교 관광학과 졸업</h3>
                    <h3>Jlpt n1,TOEIC 620,컴퓨터활용능력 2급 보유</h3>
                   
                    </span>   
            </div>
        
           </div> */}
       
       
        </div>
    );
};

export default About;