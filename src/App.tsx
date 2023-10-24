import React from 'react';
import logo from './logo.svg';
import Page1 from './components/pages/Page 1/Page1';
import Page2 from './components/pages/Page 2/Page2';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={'/page1'}>страница 1</Link>
          </li>
          <li>
            <Link to={'/page2'}>страница 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="page1" element={<Page1 />} /> 
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
