import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import Display from './components/Display';
import Edit from './components/Edit';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/products/:id' element={<Display/>} />
        <Route path='/products/:id/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
