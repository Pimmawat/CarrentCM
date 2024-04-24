import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/layout/MainPage";
import AboutPage from "./components/layout/aboutPage";
import Error404Page from "./components/layout/error404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/*" element={<Error404Page/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App