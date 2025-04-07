

import Header from '../../components/Header/header.component'
import './projectOne.css'


import myReunion from "./reunion.jpeg"

import {DarkModeContext} from '../../context/DarkModeContext'
import { useContext } from 'react'



const ProjectOne = () =>{
    
    const {darkMode} = useContext(DarkModeContext);
    return (
        
        <div id = "bio-container" className= {darkMode ? `Container-light`: `Container-dark`}>
            <Header />

            <div className = "container">
                <div className='bio'>
                    <p className='bio-text'>TETS Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                </div>
                <div className = "bio photo-div">
                    <img className = "photo-bio" src={myReunion} alt="Logo" />
                </div>
            </div>
            
            <div className = "container">
                <div className = "bio photo-div">
                <img className = "photo-bio" src={myReunion} alt="Logo" />
                </div>
                <div className='bio'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                </div>
            </div> 

            <div className = "container">
                <div className='bio'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae magnam fugiat illo unde cupiditate quos repudiandae praesentium dolorem nobis, dolore ex possimus distinctio consequuntur quis nostrum qui accusamus nemo.</p>
                </div>
                <div className = "bio photo-div">
                    <img className = "photo-bio" src={myReunion} alt="Logo" />
                </div>
               
            </div>   

        </div>
    )
}

export default ProjectOne
