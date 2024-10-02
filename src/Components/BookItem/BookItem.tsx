// src/components/BookItem.tsx
import React from 'react';

interface BookItemProps {
  book: { id: number; title: string; author: string };
  onDelete: (id: number) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b mt-4">
      <div>
        <strong>{book.title}</strong> by {book.author}
      </div>
      <button onClick={() => onDelete(book.id)} className="text-red-500">
        Remover
      </button>
    </div>
  );
};

export default BookItem;
