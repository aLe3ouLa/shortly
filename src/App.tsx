import './App.css';
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
    </div>
  );
}

export default App;
