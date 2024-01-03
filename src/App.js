import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainLogin } from './components/AuthPage/main';
import { Books } from './components/MainPage/books';


function App() {
  const user = localStorage.getItem('user');
  return (
    <div>
      <Routes>
        {user  === null ? <Route exact path="/" element={<MainLogin></MainLogin>} /> : <Route exact path="/" element={<div>{user}</div>} /> 

        }
        <Route exact path="/books" element={<Books></Books>} />
      </Routes>

    </div>
  );
}

export default App;
