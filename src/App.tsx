import Weather from './pages/Weather';
import Help from './pages/Help';
import Stats from './pages/Stats';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="weather">
        <Routes>
          <Route
            path="/"
            element={<Weather />}
          />
          <Route
            path="/help"
            element={<Help />}
          />
          <Route
            path="/stats"
            element={<Stats />}
          />
          <Route
            path="*"
            element={<h1>404 page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
