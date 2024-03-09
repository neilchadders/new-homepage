import HomeLinks from '../../components/HomeLinks/homelinks.component.jsx';
import './home.styles.css'
import QuotePicasso from '../../components/Quote-Picasso/quote-picasso.component.jsx';
import { DarkModeProvider } from '../../context/DarkModeContext';





const Home = () =>{

    return (
       
        <div className = "home">
             <DarkModeProvider>
                <HomeLinks />
                <QuotePicasso />
            </DarkModeProvider>   
        </div>
    )
}

export default Home