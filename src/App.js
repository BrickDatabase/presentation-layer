import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from './components/ErrorBoundary'
import Chart from './components/Chart'
import Deck from './components/Deck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Container>
          <Row>
            <Col><Deck odp={'inputs'} style={{width: '20rem', height: '25rem', backgroundColor: 'lightgray' }} title="Reddit Topics" subtitle="Result"/></Col>
            <Col><Deck style={{width: '40rem', height: '25rem', backgroundColor: 'lightgray'}} title="Result" subtitle="Result"/></Col>
          </Row>
          <Row>
            <Col><Deck op={'radios'} style={{width: '20rem', height: '25rem', backgroundColor: 'lightgray' }} title="Type of Charts"/></Col>
            <Col><Deck op={'fourthBox'} style={{width: '40rem', height: '25rem', backgroundColor: 'lightgray' }} title="Reddit Features" subtitle="Result"/></Col>
          </Row>
        </Container>
      </ErrorBoundary>
    </div>
  );
}

export default App;
