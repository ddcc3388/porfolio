import React from 'react';
import{FaInstagram,FaFacebook,FaMailBulk,FaGithub,FaLinkedinIn} from "react-icons/fa"
function footer() {
  return (
    <div>
        <div className='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,181.3C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>        
        </div>
        <div className='row justify-content-center footer-content'>
            <div className='col-md-6'>
                <div className='div'>
                    <p>Designed and Developed By</p>
                    <hr/>
                    <div className='d-flex justify-content-between px-2'>
                        <FaInstagram className='footer-icons'/>
                        <FaFacebook className='footer-icons'/>
                        <FaMailBulk className='footer-icons'/>
                        <FaGithub className='footer-icons'/>
                        <FaLinkedinIn className='footer-icons'/>

                    </div>
                    <hr/>
                    
                    <p>David Chiu</p>
                </div>
            </div>
        
        </div>

    </div>


  )
}

export default footer;
