import Type from '../Type/type.component'
import './bio.styles.css'

import myPic from "./me.jpeg"
const Bio = () =>{

    return (
        <div id = "bio-container">
            <div className = "photo">
                <img className = "photo-img" src={myPic} alt="Logo" />
            </div>
            <div className='bio'>
                <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                <div className = "type">
                <Type/>
            </div>
            </div>
         
            
        </div>
    )
}

export default Bio