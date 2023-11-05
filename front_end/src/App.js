import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
  <>
      <Header/>
    <Container>  
      <HomeScreen/>
      <Footer/>
    </Container>
  </>
  );
}

export default App;
