import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Speakers from './components/Speakers';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--md-sys-color-background)]">
      <Header />
      <main>
        <Hero />
        <Events />
        <Speakers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
