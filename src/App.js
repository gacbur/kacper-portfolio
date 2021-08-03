import './App.css';
import { useState, createContext } from 'react'

import Navbar from './layouts/navbar/Navbar'
import Main from './layouts/main/Main'
import Footer from './layouts/footer/Footer'

export const LanguageContext = createContext()

const LanguageProvider = (props) => {

  const [language, setLanguage] = useState(localStorage.getItem('language') ? localStorage.getItem('language') : 'PL')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

const App = () => {


  return (
    <LanguageProvider>
      <div className="app">
        <div className="app__content">
          <Navbar />
          <Main />
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
