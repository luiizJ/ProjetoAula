// src/components/BookList.tsx
import React from 'react';
import BookItem from '../BookItem/BookItem';

interface BookListProps {
  books: { id: number; title: string; author: string }[];
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
