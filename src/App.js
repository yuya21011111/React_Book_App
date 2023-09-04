import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import BookDetail from './pages/books/BookDetail';
import BookEdit from './pages/books/BookEdit';
import BookIndex from './pages/books/BookIndex';
import BookSearch from './pages/books/BookSearch';

function App() {
  return (
    <>
      <Routes>
          <Route element={<Layout />}>
              <Route index element={<BookIndex />} />
              <Route path='search' element={<BookSearch />} />
              <Route path='edit' element={<BookEdit />}>
                <Route path=':id' element={<BookDetail />} />
              </Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
