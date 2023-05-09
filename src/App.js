import React from 'react';
import './App.css';
import { Routes, Route, Link} from "react-router-dom"
import Home from './components/Home.jsx'
import Color from './components/Color.jsx'
import Word from './components/Word.jsx'
import Number from './components/Number.jsx'

function App() {
  return (
    <div>
      <nav>
        <div style= {{textAlign:'center'}}>
            <Link to="/home">Home</Link> |
            <Link to="/number/4">Number 4</Link> |
            <Link to="/word/hello">Word Hello</Link> |
            <Link to="/hello/blue/red">Blue and Red Hello</Link> |
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/number/:number" element={<Number />} />
        <Route path="/word/:word" element={<Word />} />
        <Route path="/:word/:color1/:color2" element={<Color />} />
      </Routes>
    </div>
  );
}

export default App;
