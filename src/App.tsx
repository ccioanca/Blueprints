import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from '@/components/ui/sonner';
import Projects from "./components/Projects";


function App() {

  return (
    <div className="w-full min-h-screen relative">
      <Header/>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;
