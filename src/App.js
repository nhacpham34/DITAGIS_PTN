import './grid.css';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Detail from './components/main/detail';
import Favorite from './components/main/favourite';
import React  from 'react';

import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<div className="app">
            <Header />
            <Main />
            <Footer />
          </div>} />
          <Route path="/yeuthich" element={<div className="app">
            <Header />
            <Favorite />
            <Footer />
          </div>} />
        <Route path="/Detail" element={
          <div className="app">
            <Header />
            <Detail />
            <Footer />
          </div>} />
      </Routes>
    </Router>
    
  );
}

export default App;
