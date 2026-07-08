import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from './pages/Experience';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/experience" element={ <Experience /> } />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  );
};

export default App;
