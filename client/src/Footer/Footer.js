import React from 'react';
import './Footer.css'
import { BsFillTelephoneFill } from 'react-icons/bs';

import { AiFillMail } from 'react-icons/ai';



const Footer = () => {
    return (
        <div style={{position:"relative",top:"0px",marginBottom:"30px"}}>
                  <span className='logo_1'>
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
                   </span>
                   <div style={{fontSize:"10px",marginTop:"10px",position:"relative",top:"0px"}}>
                    <span style={{marginRight:"10px"}}>
                    <BsFillTelephoneFill style={{marginRight:"10px"}}></BsFillTelephoneFill>
                    010-7284-0216
                    </span>
                    <span>
                       <AiFillMail size='13px'
                       style={{position:'relative',top:"3px",marginRight:"5px"}}></AiFillMail> dudgk0216@naver.com
                    </span>

                   </div>
        </div>
    );
};

export default Footer;