import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import MoviesList from './Pages/MoviesList/MoviesList';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MoviesList />} />
          <Route path="/*" element={<p>Error</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
