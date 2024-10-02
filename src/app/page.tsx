'use client'
import React, { useState } from 'react';
import BookForm from '../Components/BookForm/BookForm';
import BookList from '../Components/BookList/BookList';

const App: React.FC = () => {
  const [books, setBooks] = useState<{ id: number; title: string; author: string }[]>([]);

  const addBook = (book: { id: number; title: string; author: string }) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center p-4 mb-3">Catálogo de Livros</h1>
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default App;
