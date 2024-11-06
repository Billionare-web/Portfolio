import './App.css';
import Header from './components/header';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Setup from './pages/setup';
import Home from './pages/home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/setup"} element={<Setup />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App;