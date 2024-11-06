import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Services />
            <Skills />
            <Teams />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
