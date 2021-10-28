import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Pages/Landing';


function App() {

  return (
   <BrowserRouter>
   
   <Route exact path='/' component={Landing} />
   
   </BrowserRouter>
  );
}

export default App;
