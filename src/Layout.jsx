import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function Layout() {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
