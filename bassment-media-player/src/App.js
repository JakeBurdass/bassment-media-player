import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Header from './components/header/header';
import Library from './pages/library/library';

function App() {
  
  return (
    <>
      <div className="App">
        <Header />
        ç
        {/* <Library /> */}
      </div>
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}
        {/* <Route path="library" element={<Library />}/> */}
      </Routes>
    </>
  );
}

export default App;
