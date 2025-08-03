// src/App.jsx
import Search from "./components/Search";


function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>GitHub User Search App</h1>
      <h1 className="text-3xl font-bold text-blue-600">GitHub User Search</h1>

      <Search />
    </div>
  );
}

export default App;
