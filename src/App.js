import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import BookDetail from './pages/books/BookDetail';
import BookEdit from './pages/books/BookEdit';
import BookIndex from './pages/books/BookIndex';
import BookSearch from './pages/books/BookSearch';
import TenArr from './pages/books/TenArr';
import { usePersist } from './hooks/usePersist';

function App() {
  const STORAGE_KEY = 'book'
  const [books, setBooks] = usePersist(STORAGE_KEY)
  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<BookIndex books={books} />} />
          <Route path='search' element={<BookSearch books={books} setBooks={setBooks} />} />
          <Route path='edit' element={<BookEdit />}>
            <Route path=':id' element={<BookDetail books={books} setBooks={setBooks} />} />
          </Route>
        </Route>
      </Routes>
      {/* <TenArr /> */}
      {/* <Etarget /> */}
    </>
  );
}

export default App;
