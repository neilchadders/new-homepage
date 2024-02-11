import Header from '../../components/Header/header.component.jsx'
import './home.styles.css'
import Quotes from '../../components/Quotes/quotes.component.jsx'
import { DarkModeProvider } from '../../context/DarkModeContext';





const Home = () =>{

    return (
       
        <div className = "home">
                <Header />
            <DarkModeProvider>
                <Quotes />
            </DarkModeProvider>   
        </div>
    )
}

export default Home