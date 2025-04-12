import React from 'react'
import Header from './components/header/Header';
import Footer from './components/fouter/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App