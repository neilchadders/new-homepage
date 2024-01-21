
import './type.styles.css'
import Typewriter from "typewriter-effect";



const Type = () =>{
   

    return(
        <div id='object'>
           <Typewriter className = "type-container"
                onInit={(typewriter) => {
                    typewriter
                        .typeString( "<span class ='var-highlight'>var</span> aboutMe = {<br>Name: <span class='string-highlight'>Neil,</span><br>Location: <span className='string-highlight'>Yorkshire,</span><br>Tech-Used:[<span className='string-highlight'>JavaScript, </span><span className='string-highlight'>HTML, </span><span className='string-highlight'>CSS, </span><span className='string-highlight'>SASS, </span><span className='string-highlight'>React, </span><span className ='string-highlight'>PHP, </span><span className='string-highlight'>Node.js, </span><span className ='string-highlight'>mySQL </span>]<br>};")
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

            
           



export default Type