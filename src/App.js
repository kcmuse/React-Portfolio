import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
