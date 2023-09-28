import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
