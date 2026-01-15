import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
