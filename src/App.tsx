import './App.css';
import { Hero } from './components/Hero';
import { Input } from './components/Input';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Input />
    </div>
  );
}

export default App;
