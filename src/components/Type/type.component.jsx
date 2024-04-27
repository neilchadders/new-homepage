
import './type.styles.css'
import Typewriter from "typewriter-effect";


const Type = () =>{
    return(
        <div id='object'>
           <Typewriter className = "type-container"
                onInit={(typewriter) => {
                    typewriter
                        .typeString( "<span class ='var-highlight'>var</span> techUsed:[<span class='string-highlight'>JavaScript, </span><span class='string-highlight'>HTML, </span><span class='string-highlight'>CSS, </span><span class='string-highlight'>SASS, </span><span class='string-highlight'>React, </span><span class ='string-highlight'>PHP, </span><span class='string-highlight'>Node.js, </span><span class ='string-highlight'>mySQL </span>];")
                        .pauseFor(1000)
                        .start()
                }}
            />
 
        </div>
                
         )
}   
     
           

export default Type