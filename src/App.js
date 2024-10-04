import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h2>Hello World!</h2>

      <Dashboard />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
