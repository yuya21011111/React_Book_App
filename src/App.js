import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import BookDetail from './pages/books/BookDetail';
import BookEdit from './pages/books/BookEdit';
import BookIndex from './pages/books/BookIndex';
import BookSearch from './pages/books/BookSearch';
import TenArr from './pages/books/TenArr';
import Etarget from './pages/books/Etarget';
import { useState, useEffect } from 'react';

function App() {
  const STORAGE_KEY = 'book'
  const [books, setBooks] = useState(() => {
    const save = localStorage.getItem(STORAGE_KEY)
    const initialValue = JSON.parse(save)
    return initialValue || []
  })

  // 更新されたらlocalStorageに保存
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(books)) }, [books])
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
