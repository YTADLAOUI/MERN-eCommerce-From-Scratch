import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
    <Routes>
        <Route path='/product/:id' element={<HomeScreen/>}/>
    </Routes>
            <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
