import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
  <>
      <Header/>
    <Container>
      <h1>welcome to proShop</h1>
      <Footer/>
    </Container>
  </>
  );
}

export default App;
