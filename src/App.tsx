import Header from "./components/Header";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="container">
      <div className="weather">
        <Header />
        <Info />
      </div>
    </div>
  );
}

export default App;
