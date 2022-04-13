import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import EntrepreneurshipBooks from './pages/entrepreneurshipBooks/EntrepreneurshipBooks';
//import Header from './components/organisms/Header/Header'
import BookDetailsPage from './pages/bookDetailsPage/BookDetailsPage';

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/explore-books/:category' element={<EntrepreneurshipBooks/>} />
        <Route path='/book/beyond-entrepreneurship-2.0' element={<BookDetailsPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
