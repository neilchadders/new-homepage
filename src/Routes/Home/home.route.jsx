import NewLinks from '../../components/New-Links/new-links.component.jsx';
import Header from '../../components/Header/header.component.jsx';
import './home.styles.css'
import QuotePicasso from '../../components/Quote-Picasso/quote-picasso.component.jsx';
import { DarkModeProvider } from '../../context/DarkModeContext';





const Home = () =>{

    return (
       
        <div className = "home">
             <DarkModeProvider>
                <Header/>
                <QuotePicasso />
            </DarkModeProvider>   
        </div>
    )
}

export default Home