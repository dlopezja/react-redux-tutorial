import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRouter from './router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
