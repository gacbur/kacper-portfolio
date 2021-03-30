import './App.css';

import Navbar from './layouts/navbar/Navbar'
import Main from './layouts/main/Main'
import Footer from './layouts/footer/Footer'

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Navbar />
        <Main />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
