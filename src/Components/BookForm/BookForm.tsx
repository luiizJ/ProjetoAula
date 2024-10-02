import React, { useState } from 'react';

interface BookFormProps {
  onAddBook: (book: { id: number; title: string; author: string }) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && author) {
      onAddBook({ id: Date.now(), title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col">
      <input
        type="text"
        placeholder="Título do Livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2 mb-3"
        required
      />
      <input
        type="text"
        placeholder="Autor Do Livro"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 mt-4 text-white p-2 mr-2">
        Adicionar Livro
      </button>
    </form>
  );
};

export default BookForm;
