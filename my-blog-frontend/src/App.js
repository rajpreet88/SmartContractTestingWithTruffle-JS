import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import NotFound from "./pages/NotFound";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className="max-w-screen-md mx-auto pt-20">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/article/:name' element={<Article/>}/>  
              <Route path='/articleslist' element={<ArticlesList/>}/>
              <Route path='*' element={<NotFound/>}/>   
          </Routes> 
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
