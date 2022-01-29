import React from 'react';
import Header from '../components/header';
import courseslist from "./coursesdata"
function Courses() {
  return (
    <div>
      <Header/>
      <div 
      className='courses-intro' 
      style={{backgroundImage: `url('./courses.svg')` }}>
      <div className="courses-intro-content">
        <div>
          <h1>David SIK STUFF</h1>
          <div>
            <p>"I can't teach epopel everything they need to know. The best I can do is position them where they can find what they need to know when they need to know."</p>
            <button className='primary-button'><a href="#courses-list">GET STARTED</a></button>
          </div>
        </div>
      </div>
      </div>

      <div className='why-david-parent'>
        <div className='why-david n-box1 flex-with-center'>
          <h1>Why David ?</h1>
          <div className='why-david-content'>
            <p>Simple..</p>
            <br/>
            <p>I know how to kiss..</p>
            <br/>
            <p>nonono...Not that kiss..</p>
            <br/>
            <p>I know how to...</p>
            <br/>
            <h3>To keep it simple</h3>
          </div>
        
        </div>

      </div>

      <div className="container courses-list mb-5" id='courses-list'>

      <h3 className="font-bold">Take a look of our Courses</h3>
      <hr />

      <div className="row mt-5">
        {courseslist.map(course => {
          return <div className="col-md-4">
            <div className="position-relative course">
              <img className = 'course-image w-100' src={course.image} alt="" />
              <div className="course-content w-100">
                <h3>{course.title}</h3>
                <hr />
                <p>{course.description}</p>
                <button className='primary-button'>DEMO</button>
              </div>
            </div>
          </div>
        })}


      </div>



    </div>

    </div>
  )
}

export default Courses
