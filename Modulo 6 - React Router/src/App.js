import './App.css';

// 1 - Config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id/info' element={<Info />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<NotFound />} /> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
