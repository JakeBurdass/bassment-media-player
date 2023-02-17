import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Header from './components/header/header';
import Library from './pages/library/library';

function App() {
  
  return (
    <div>
      <div className="App">
        <Header />

        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/library" element={<Library />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
