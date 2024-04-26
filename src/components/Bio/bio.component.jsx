import Type from '../Type/type.component'
import './bio.styles.css'

import myPic from "./me.jpeg"
const Bio = () =>{

    return (
        <div id = "bio-container">

            <div id = "container">
                <div className = "bio-photo">
                    <img className = "photo-img" src={myPic} alt="Logo" />
                </div>
                <div className='bio'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                </div>
            </div>

            <div id = "container">
                <div className = "bio-photo">
                    <img className = "photo-img" src={myPic} alt="Logo" />
                </div>
                <div className='bio'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                </div>
            </div>

            <div id = "container">
                <div className = "bio-photo">
                    <img className = "photo-img" src={myPic} alt="Logo" />
                </div>
                <div className='bio'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Bio