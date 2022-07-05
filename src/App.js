import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRouter from './router';

function App() {
  //window.localStorage.clear();
  console.log('api_url= ' + process.env.REACT_APP_API_URL);
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
