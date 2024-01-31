import Header from '../../components/Header/header.component.jsx'
import './home.styles.css'
import Quote from '../../components/Quote/quote.component.jsx'
import { DarkModeProvider } from '../../context/DarkModeContext';





const Home = () =>{

    return (
       
        <div className = "home">
            <DarkModeProvider>
                <Header />
                <Quote />
            </DarkModeProvider>   
        </div>
    )
}

export default Home