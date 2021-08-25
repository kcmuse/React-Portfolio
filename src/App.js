import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
