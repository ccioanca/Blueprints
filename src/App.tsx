import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  
  return (
    <div className="w-screen h-screen bg-white dark:bg-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
