import { Route, Routes } from 'react-router-dom';

import Learning from 'pages/learning/Learning';
import Blog from 'pages/blog/Blog';
import Home from 'pages/home/Home';
import About from 'pages/about/About';
import Odtu from 'pages/odtu/OdtuYurtSonucRobotu'

import 'App.css'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/odtu-yurt-sonuc-robotu" element={<Odtu />} />
      </Routes>
  );
};

export default App;