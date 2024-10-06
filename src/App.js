import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import PortfolioGrid from "./Components/Portfolio/Portfolio";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<PortfolioGrid />} path="/portfolio" />
      </Routes>
    </div>
  );
}

export default App;
