import React from 'react';
import Header from '../components/header';
function Contact() {
  return (
    <div>
      <Header/>
      <div className='container contact mt-1'>
        <div className='row pt-5'>
          <div className='col-md-6 p-5'>
            <img className='contact-image' src="./contactus.svg" alt="" />
          </div>
          <div className='col-md-6'>
          
            <div className='contact-form m-2 p-5 n-box2'>
              <h3 className='font-bold'>Contact US</h3>
              <hr/>
              <input type="text" className = "form-control" placeholder= 'Name'/>
              <input type="text" className = "form-control" placeholder= 'name'/>
              <textarea className = "form-control" rows={3} defaultValue= {""} />
              <button className='primary-button mt-3' >SUBMIT</button>
            </div>
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
