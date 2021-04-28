import myLogo from './SporkLogoSVG.svg';
import twitterIcon from './008-twitter.svg';
import mediumIcon from './026-medium.svg';
import cloudButton from './vector-cloud-SVG.svg';
import telegramIcon from './telegram_icon.png';
import HttpsRedirect from 'react-https-redirect';
import Presale from './components/presale';

import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { Container as MyContainer, Row, Col, setConfiguration } from 'react-grid-system';
import ThankYou from './components/thankyou';


const imgStyle = { 
  border: '0'
}

function App() {
  setConfiguration({ defaultScreenClass: 'sm', gridColumns: 4, gutterWidth: 140 });
  return (
    <div className="App">
      <HttpsRedirect>
        <Router>
          <header className="App-header">
            <MyContainer>
              <Row justify="between" debug>
                <Col>
                  <Link to="/">
                    <div className ="container">
                      <div className ="centered">HOME</div>
                      <img style={imgStyle} src={cloudButton} width="200" height="200" />
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to={{ pathname: "https://sporkdao.gitbook.io/sporkdao/" }} target="_blank">
                    <div className="container">
                      <div className ="centered">WIKI</div>
                      <img style={imgStyle} src={cloudButton} width="200" height="200" />
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to="/farm">
                    <div className="container">
                      <div className="centered">FARM</div>
                      <img style={imgStyle} src={cloudButton} width="200" height="200" />
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to="/presale">
                    <div className="container">
                      <div className="centered">PRESALE</div>
                      <img style={imgStyle} src={cloudButton} width="200" height="200" />
                    </div>
                  </Link>
                </Col>

              </Row>
            </MyContainer>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/farm">
                <Farm />
              </Route>
              <Route path="/presale">
                <Presale/> 
              </Route>
              <Route path="/thank-you"> 
                <ThankYou/> 
              </Route>

            </Switch>

          </header>

          <body className='App-body'>
            The Sporky Team All Rights Reserved
          <div className='App-contacts'>

              <a href="https://www.twitter.com/sporkdao">
                <img src={twitterIcon} width="30" height="30" />
              </a>
              <a href="https://www.medium.com/sporkdao"><img src={mediumIcon} width="30" height="30" /> </a>
              <a href="https://t.me/sporkdao">         <img src={telegramIcon} width="30" height="30" /> </a>
            </div>

          </body>
        </Router>
      </HttpsRedirect>
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

export default App;
