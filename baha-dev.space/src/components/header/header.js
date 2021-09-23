import Logo from './logo.js';

import Home from '../../pages/home'; 
import Portfolio from '../../pages/portfolio';
import Contacts from '../../pages/contacts';
import '../../animations/burger-menu.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Link
} from "react-router-dom";



function Header() {  
  return (
    <div className="app-wrapper">
        <Router>
          <header className="header">
            <div className="container">
                <div className="wrapper">
                    <Logo clas="c-magnetic" /> 
                
                    <nav className="site-menu hide-sm">
                        <ul> 
                            <li><Link to="/" className="c-magnetic"><span>Главная</span></Link></li>
                            <li><Link to="/portfolio" className="c-magnetic"><span>Портфолио</span></Link></li>
                            <li><Link to="/contacts" className="c-magnetic"><span>Контакты</span></Link></li> 
                        </ul>
                    </nav>

                    <button className="mobile-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div> 
            </div>
          </header>
          
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
          </Switch>
        </Router>
        <div className="fixed-menu">
          <div className="container">
              <div className="menu-wrap">
                <div className="menu-header"> 
                    <div className="title">Меню</div>
                </div>

                <nav className="site-menu">
                  <ul> 
                      <li><a href="/" className="c-magnetic menu-item"><span>Главная</span></a></li>
                      <li><a href="/portfolio" className="c-magnetic menu-item"><span>Портфолио</span></a></li>
                      <li><a href="/contacts" className="c-magnetic menu-item"><span>Контакты</span></a></li> 
                  </ul>
                </nav>
              </div>
          </div>
        </div>
    </div> 
   
  );   
} 


export default Header;