import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 relative">
      <Header/>
      <main>
         <Hero />
        {/*<About />
        <Skills />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
