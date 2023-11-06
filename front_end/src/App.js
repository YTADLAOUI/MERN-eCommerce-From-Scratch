import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProductScreen from './components/ProductScreen';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
    <Routes>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path='/' element={<HomeScreen/>}/>
    </Routes>
            <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
