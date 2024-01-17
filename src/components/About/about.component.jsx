import './about.styles.css'
import Typewriter from "typewriter-effect";



const About = () =>{
   

    return(
        <div id='object'>
           <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString( "<span class ='var-highlight'>var</span> aboutMe =<br> { name: <span className='string-highlight'>'Neil'</span>, profession: <span className='string-highlight'>'Web Developer'</span>, location: <span className='string-highlight'>'Yorkshire'</span>}")
                       
                        .pauseFor(1000)
                        .start()
                }}
            />
        </div>
                
         )
}   

        /*<pre id="typewriter">
                    
        "<span className='var-highlight'>var</span> aboutMe =            
            name: <span className='string-highlight'>'Neil'</span>,
            profession: <span className='string-highlight'>'Web Developer'</span>,
            location: <span className='string-highlight'>'Yorkshire'</span>,
            techUsed:[<span className='string-highlight'>'Javascript'</span>,
                      <span className='string-highlight'>'HTML'</span>,
                      <span className='string-highlight'>'CSS'</span>
                      <span className='string-highlight'>'SASS'</span>
                      <span className='string-highlight'>'React'</span>
                      <span className='string-highlight'>'Node.js'</span>];"
             </pre>*/

            
           



export default About