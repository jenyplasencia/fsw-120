import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/Services"
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Plumbing 5 Stars! </h1>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Footer />
    </div>
  );
}

export default App;