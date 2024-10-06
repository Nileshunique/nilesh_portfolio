import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
