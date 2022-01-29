import React from 'react';
import Courosel from '../components/courosel';

import Header from '../components/header';

function Home() {
  return (
    <div>
      <Header />

      <div className="introduction flex-with-center" style={{ backgroundImage: `url('./introbg.svg')` }}>

        <div>
          <h1 data-aos= 'fade-up'>DAVID CHIU</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>Full Stack Developer<br /> Software Engineer</p>
            <button className='primary-button font-bold'> <a href='#courosel'> Learn More!</a></button>

          </div>
        </div>

      </div>

      <div className='waves' style={{backgroundImage:`url('./wave-haikei.svg')` }}>
      </div>

      <Courosel />
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,64L34.3,106.7C68.6,149,137,235,206,240C274.3,245,343,171,411,160C480,149,549,203,617,197.3C685.7,192,754,128,823,90.7C891.4,53,960,43,1029,64C1097.1,85,1166,139,1234,154.7C1302.9,171,1371,149,1406,138.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>  </div>

      <div className='container' >

        <div className='row justify-content-start'>
          <div className='col-md-4'>
            <div className='n-box2 px-5 py-5 font-bold 'data-aos= 'fade-right'>
              <h1>Yessirr</h1>
              <br />
              <p>I am a very talented boy.</p>
            </div>
          </div>
        </div>
        <div className='row pt-5 justify-content-center'>
          <div className='col-md-4'>
            <div>
              <img src='./jsbuff.svg' alt="" height="200" className="w-100" data-aos= 'fade-up'/>
            </div>
          </div>
        </div>
        <div className='row pt-5 justify-content-end'>
          <div className='col-md-4'>
            <div className='n-box2 px-5 py-5 font-bold'data-aos= 'fade-left'>
              <p>What is up papi</p>
            </div>
          </div>
        </div>
      </div>




      <div className='devstack container my-5 n-box2 py-4 px-4'>
        <div className='text-center'>
          <h3 className='font-bold text-center'>My Development Stack</h3>
          <hr/>
          <img src='./developer.svg' alt="" height='200' width={200} className='text-center'/>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='font-bold'>
              <h3 className='font-bold'>Front End </h3>
              <hr/>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h3 className='font-bold'>Front End </h3>
              <hr/>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='font-bold text-end'>
              <h3 className='font-bold'>Front End </h3>
              <hr/>
              <p>HTML/CSS</p>
              <p>HTML/CSS</p> 
              <p>HTML/CSS</p>
              <p>HTML/CSS</p>
            </div>
          </div>
        </div>


      </div>

      <div>
        <br/>
        <br/>
        <h3 className='font-bold text-center'>Who is David?</h3>
      
        <div className='who-is-david flex-with-center' style={{backgroundImage:`url('./blob-haikei.svg')` }}>
        
        <div>
          <h3>Hi, Hello, 你好</h3>
          <hr/>
          <p><pre>{JSON.stringify({
            name:"David Chiu",
            from: "Australia/China",
            age: "22",
            gender: "Male"
          },null,2)}</pre></p>
        </div> 

        </div>
      </div>
 



    </div>





  );
}

export default Home
