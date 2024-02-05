import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬 Peliculas</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
