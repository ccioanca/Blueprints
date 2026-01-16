import Header from "./components/Header";
import Hero from "./components/Hero";
import { useTheme } from "@/lib/theme-provider";

function App() {

  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="w-screen h-screen bg-white dark:bg-gray-800">
      <Header theme={theme} themeToggle={toggleTheme}/>
      <main className="flex-grow">
        <Hero />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
