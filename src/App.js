import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Teams from './components/Teams';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Teams />
            <Skills />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
