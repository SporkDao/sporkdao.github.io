import logo from './SporkLogoSVG.svg';
import cloudButton from './vector-cloud-SVG.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link
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
              <Link to="/docs">
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

          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <body className='App-body'>
            @2021 The Sporky Team All Right Reseved
   
        </body>
      </Router>


    </div>
  );
}

export default App;
