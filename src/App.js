import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from './components/ErrorBoundary'
import Chart from './components/Chart'
import Deck from './components/Deck'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Dashboard/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
