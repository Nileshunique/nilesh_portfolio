import { } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      {/* <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes> */}
    </div>
  );
}

export default App;
