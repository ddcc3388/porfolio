import React from 'react';
import {FaJava, FaJsSquare, FaReact} from 'react-icons/fa'
import {SiCoursera, SiCplusplus, SiCss3, SiHtml5, SiPython} from 'react-icons/si'
function Courosel() {
  return (
    <div>
        
        <div className='courosel-parent position-relative' id="courosel">
            <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>My Skills</h1>
            <div className='gallery'>
                <span style={{'--i' : 1}}>
                    <FaReact color='cyan'/>
                </span>

                <span style={{'--i' : 2}}>
                    <FaJava color='orange'/>
                </span>
                <span style={{'--i' : 3}}>
                    <FaJsSquare color='yellow'/>
                </span>
                <span style={{'--i' : 4}}>
                    <SiCoursera color='light blue'/>
                </span>
                <span style={{'--i' : 5}}>
                    <SiCplusplus color='turquoise'/>
                </span>
                <span style={{'--i' : 6}}>
                    <SiCss3 color='blue'/>
                </span>
                <span style={{'--i' : 7}}>
                    <SiHtml5 color='orange'/>
                </span>
                <span style={{'--i' : 8}}>
                    <SiPython color='navy'/>
                </span>



            </div>
        </div>
    </div> 
  )
}

export default Courosel;
