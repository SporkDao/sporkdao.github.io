import logo from './SporkLogoSVG.svg';
import cloudButton from './vector-cloud-SVG.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Container as myContainer, Row, Col } from 'react-grid-system';



function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <myContainer>
            <Row justify="between" debug>
              <Col>
              <Link to="/">
                <div class="container">
                  <div class="centered">Home</div>
                  <img border="0" src={cloudButton} width="150" height="150" />
                  </div> 
                </Link>
              </Col>
              <Col>
              <Link to="/whitepaper">
                <div class="container">
                  <div class="centered">Whitepaper</div>
                  <img border="0" src={cloudButton} width="150" height="150" />
                  </div> 
                </Link>
              </Col>
              <Col>
              <Link to="/farm">
                <div class="container">
                  <div class="centered">Farm</div>
                  <img border="0" src={cloudButton} width="150" height="150" />
                  </div> 
                </Link>
              </Col>
              <Col>
              <Link to="/presale">
                <div class="container">
                  <div class="centered">Presale</div>
                  <img border="0" src={cloudButton} width="150" height="150" />
                  </div> 
                </Link>
              </Col>
            </Row>
          </myContainer>

          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <body className='App-body'>
        Coming soon
   
        </body>
      </Router>


    </div>
  );
}

export default App;
