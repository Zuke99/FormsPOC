
import './App.css';
import { Route, Routes } from "react-router-dom";
import GenerateToken from './components/GenerateToken';
import FormComponent from './components/FormComponent';

function App() {
  return (
 <>
  <Routes>
    <Route path='/' element={<GenerateToken/>} />
    <Route path='/form' element={<FormComponent/>} />
  </Routes>
 </>
  );
}

export default App;
