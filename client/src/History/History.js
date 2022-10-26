import React, { useState } from 'react';
import './History.scss'

const History = () => {

    const [next,setNext] =useState(1);
    const [next2,setNext2] =useState(false)

    const NextHandler = () =>{
        setNext(next+1)
    }
    const prevHandler = () =>{
        setNext(next-1)
    }
    const NextHandler2 = () =>{
        setNext2(true)
    }
    const prevHandler2 = () =>{
        setNext2(false)
    }
    const secondPageRenderer = () =>{
        return(
            <div style={{height:'500px',fontSize:"1rem"
            }}>
               <h4>プロジェットの説明</h4>
                <h5>  
                    専攻が観光学科だったので、旅行に関したアプリを制作したかったです。
                    ユーザーと旅行の計画を一緒に作ってみて、観光地、宿泊施設、美味しい店、
                    ショッピングスポットで分けて見るのができて、おすすめとかいいね機能もあります。
                    そして,Hellojejuのユーザーがお互いに情報を共有したり、観光地を推薦することができる
                    コミュニティもあります。

                </h5>
      
           <h5> 
            TRAVELSPOTPage: 韓国のJEJUと言う観光地を分けて、宿泊施設、美味しい店、ショッピングスポットのカテゴリーで検索ができるし、行きたいスポットはいいねをして、
             いいねリストで見ることができます。
           </h5>
          <h5>
          NEWSPAGE:私が直接に行って推薦したかった場所を動画で制作して推薦しています。ページの下には観光地、
          美味しい店、宿泊施設、ショッピングスポットで分けて、googleのapiを使用して、推薦したい場所を地図に
　　　　　見せています。
          </h5>
           
            <button style={{fontSize:"1.2rem"}}className='btn' onClick={prevHandler}>prev</button>
            <button style={{fontSize:"1.2rem"}}className='btn' onClick={NextHandler}>Next</button>
            </div>
        )
    }
   
    const hellojejuthird = () =>{
        return (
            <div style={{height:'500px'}}>
 <h5> 
            community Page: Hellojejuのユーザーがお互いに情報を共有したり、観光地を推薦することができる
            コミュニティPageです。
        
           </h5>
          <h5>
          MyTravel: ユーザーの情報を見ることができるし、旅行のスケジュールを直接に設定して、追加、削除ができます。
       
          </h5>
           
            <button style={{fontSize:"1.2rem"}} className='btn' onClick={prevHandler}>prev</button>
            </div>
        )
    }
    const secondPageRenderer2 = ( ) =>{
        return(
            <div style={{height:'500px'}}>
                <h4>프로젝트 설명</h4>
             
                <h5>
                    ヴィンテージ商品のショッピングモールで、ユーザーが商品をアップロードをしたり、購入もできます。
                    お支払いはpaypalの　テストpayで仮想のお支払いもできます。
                </h5>
                 <button style={{fontSize:"1.2rem"}} className='btn'onClick={prevHandler2}>prev</button>
            </div>
        )
    }
    return (
        <div style={{width:"100%"}} >
            {/* 헬로우 제주 */}
            <div style={{display:"flex",justifyContent:"center",}}>
            <div style={{width:"80%",height:'600px',}}>
          <div style={{display:"flex",justifyContent:"space-around",margin:"50px"}}>
          <video style={{width:'600px',height:"400px",position:"absolute",
        left:"15%" }} id="vid" src="video/헬로우 제주.mp4" controls></video>

          <div style={{width:"350px",position:"absolute",
        left:"65%"}}>
          
          {
            next===1?<div style={{}}>
                <h2>HELLO JEJU</h2>
                 <h5>制作期間:　2022.06.01~2022.07.31 2ヶ月</h5>
           <h5> 言語: HTML,CSS,JS,REACT,MONGODB,NODEJS</h5>
           <h5>github(ギットハブ)で cloneして、terminalで  npm install, そして、cd clientした後にnpm install、
                最後に　npm run dev 入力してくださったら、テストができます。 🙆‍♀️</h5>
           <h5>
           <a  href='https://github.com/leeyounagh/Newhellojeju'>
            最後の完成作はこちらにあります。</a>
          
           </h5>
        
           <button style={{fontSize:"1.2rem"}}className='btn' onClick={NextHandler}>
              Next
           </button>
           </div>:next===2?<div>{secondPageRenderer()}</div>:<div>{hellojejuthird()}</div>
          }
          
            
            {/* 2번째베이지 */}
            {/*  */}
          </div>
        
          </div>
           
        
          
     
            </div>

            </div>


            {/* 쇼핑몰 */}
            <div style={{
       display:"flex",justifyContent:"center",height:'100%',}}>
            <div style={{width:"80%",height:'600px'}}>
             <div style={{display:"flex",justifyContent:"space-around"}}>
             <video style={{width:'600px',height:"400px",position:"absolute",
        left:"15%"  }} id="vid" src="video/쇼핑몰.mov" controls></video>
             <div style={{width:"350px",marginTop:"50px",position:"absolute",
        left:"65%"}}>
                {
                    next2?<div>{secondPageRenderer2()}</div>:
                   <div style={{height:'500px',}}>
                    <h2>VintAge</h2>
                       <h5>制作期間:2022.05.01~05.31 一ヶ月</h5>
              <h5> 사용언어: HTML,CSS,JS,REACT,MONGODB,NODEJS</h5>
        
            <h5>github(ギットハブ) cloneして、terminalで  npm install, そして、cd clientした後にnpm install、
                最後に　npm run dev 入力してくださったら、テストができます。 🙆‍♀️
                
            </h5>
            <h5><a href='https://github.com/leeyounagh/shoppingmall'>github</a></h5>
            <button style={{fontSize:"1.2rem"}} className='btn' onClick={NextHandler2}>Next</button>
                   </div>
                }
           
                </div>

             </div>
            </div>
            </div>
    
        </div>
    );
};

export default History;