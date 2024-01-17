
import Header from './components/Header/header.component.jsx'
import Quote from './components/Quote/quote.component.jsx'
import About from './components/About/about.component.jsx';

import Typewriter from "typewriter-effect";


import './App.css';



const App = () => {
  return (
    <>
      <Header />
      <Quote />
      <About/>
    </> // fragment
  );
}

export default App;
