import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Error from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route exact path="/NEW-WAY" element={<Home />}/>
        <Route path="/NEW-WAY/catalog" element={<Catalog />}/>
        <Route path="/NEW-WAY/about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)