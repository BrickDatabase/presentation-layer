import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from './components/ErrorBoundary'
import Chart from './components/Chart'
import Deck from './components/Deck'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Deck style={{width: '20rem', height: '100%'}} title="Type of Charts" subtitle="Result"/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
