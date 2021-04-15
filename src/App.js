import myLogo from './SporkLogoSVG.svg';
import twitterIcon from './008-twitter.svg'; 
import mediumIcon from './026-medium.svg'; 
import cloudButton from './vector-cloud-SVG.svg';
import telegramIcon from './telegram_icon.png'; 
import './App.css';
import {
  BrowserRouter as Router,
  Link, 
  Switch, 
  Route
} from "react-router-dom";
import { Container as myContainer, Row, Col, setConfiguration } from 'react-grid-system';



function App() {
  setConfiguration({ defaultScreenClass: 'sm', gridColumns: 4, gutterWidth: 140 });
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <myContainer>
            <Row justify="between" debug>
              <Col>
              <Link to="/">
                <div class="container">
                  <div class="centered">HOME</div>
                  <img border="0" src={cloudButton} width="200" height="200" />
                  </div> 
                </Link>
              </Col>
              <Col>
              <Link to={{ pathname: "https://sporkdao.com/docs" }} target="_blank">
                <div class="container">
                  <div class="centered">WIKI</div>
                  <img border="0" src={cloudButton} width="200" height="200" />
                  </div> 
                </Link>
              </Col>
              <Col>
              <Link to="/farm">
                <div class="container">
                  <div class="centered">FARM</div>
                  <img border="0" src={cloudButton} width="200" height="200" />
                  </div> 
                </Link>
              </Col>
              <Col>
              <Link to="/presale">
                <div class="container">
                  <div class="centered">PRESALE</div>
                  <img border="0" src={cloudButton} width="200" height="200" />
                  </div> 
                </Link>
              </Col>
              
            </Row>
          </myContainer>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/farm">
            <Farm />
          </Route>
          <Route path="/presale">
            <Presale />
          </Route>
    
        </Switch>

        </header>

        <body className='App-body'>
        The Sporky Team All Rights Reserved 
          <div className ='App-contacts'>

            <a href="https://www.twitter.com/sporkdao">
              <img src={twitterIcon} width="30" height="30"/> 
            </a> 
            <a href="https://www.medium.com/sporkdao"><img src={mediumIcon} width="30" height="30" /> </a>
            <a href="https://t.me/sporkdao">         <img src={telegramIcon} width="30" height="30"/> </a>
          </div>
         
        </body>

       
      </Router>


    </div>
  );
}


function Home() {
  return (
    <div>
         <img src={myLogo} className="App-logo" alt="logo" />
    </div>
  );
}

function Farm() {
  return (
    <div>
      <h2>Farm will arrive shortly after mainnet launch. </h2>
    </div>
  );
}

function Presale() {
  return (
    <div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbxCVf7N34oDNdFUX_ZKfVz3seEWdnc3g7GYc8_Hr-zHjnFw/viewform?embedded=true" width="640" height="582" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}



export default App;
