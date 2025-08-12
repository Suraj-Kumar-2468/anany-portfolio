import './App.css';
import HeaderSection from './HeaderSection';
import Hero from './Sections/Hero';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
