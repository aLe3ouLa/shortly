import './App.css';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Input } from './components/Input';
import { Navbar } from './components/Navbar';
import { Statistics } from './components/Statistics';

function App() {
  return (
    <div className="grid place-items-center">
      <Navbar />
      <Hero />
      <Input />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
