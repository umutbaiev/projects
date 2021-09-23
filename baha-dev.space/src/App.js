import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import './animations/preloader.js';

function App() {   
  return ( 
    <div className="app">  
      <div className="preloader">
          <div className="loader"></div>
      </div>
  
      <Header />
      <div className="c-cursor">
        <div className="c-cursor__pointer"></div>
      </div>
      <Footer />
    </div>
  );    
} 
 
export default App;
 