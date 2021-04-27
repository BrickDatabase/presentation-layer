import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from './components/ErrorBoundary'
import Chart from './components/Chart'
import Deck from './components/Deck'
import Global from './helpers/Global'
import Dashboard from './components/Dashboard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      {/* <Dashboard/> */}
        <Container>
          <Row>
            <Col style={{paddingRight: '0'}}><Deck op={'inputs'} style={{backgroundColor: 'lightgray'}} title="Reddit Topics" subtitle="Result"/></Col>
            <Col style={{paddingLeft: '0'}}><Deck style={{backgroundColor: 'lightgray'}} title="Result" subtitle="Result"/></Col>
            {/* width: '20rem', height: '25rem', */}
            {/* width: '40rem', height: '25rem', */}
            {/* Col style={{paddingRight: '0', marginRight: '-175px'}}*/}
          </Row>
          <Row>
            <Col style={{paddingRight: '0'}}><Deck op={'radios'} style={{backgroundColor: 'lightgray' }} title="Type of Charts"/></Col>
            <Col style={{paddingLeft: '0'}}><Deck op={'fourthBox'} title="Reddit Features" subtitle="Result"/></Col>
            {/* width: '20rem', height: '25rem', */}
            {/* width: '40rem', height: '25rem', */}
            {/* Col style={{paddingRight: '0', marginRight: '-175px'}} */}
            {/* Deck style={{width: '100%', height: '400px'}} */}
          </Row>
        </Container>
      </ErrorBoundary>
    </div>
  );
}

export default App;
