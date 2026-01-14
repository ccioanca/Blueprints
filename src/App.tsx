import { ComponentExample } from "@/components/component-example"

function App() {
  return (
    <div className="flex flex-col mx-auto">
      <h1 className="text-xl font-medium">Portfolio</h1>
      <div className="card">
        <p>
          My Portfolio
        </p>
      </div>
      <ComponentExample/>
    </div>
  )
}

export default App;