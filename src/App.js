import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRouter from './router';


function App() {
  //window.localStorage.clear();
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
