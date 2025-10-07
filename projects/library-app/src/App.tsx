import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import AddBookModal from "./components/AddBookModal";
import type { Book } from "./types";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "1984",
      author: "George Orwell",
      genre: "Dystopia",
      pages: 328,
      readStatus: false,
    },
    {
      id: "2",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      pages: 310,
      readStatus: true,
    },
  ]);

  const handleRemoveBook = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id));
  };

  const handleReadStatusBook = (id: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, readStatus: !book.readStatus } : book
      )
    );
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const genres = Array.from(new Set(books.map((b) => b.genre)));

  const filteredBooks = books.filter(
    (book) =>
      (selectedGenre === "" || book.genre === selectedGenre) &&
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBook = (book: Book) => {
    setBooks([...books, book]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <div style={{ flex: 1, position: "relative" }}>
          {/* Add Book Button */}
          <button
            onClick={() => setShowAddModal(true)}
            style={{
              position: "absolute",
              top: "1vh",
              right: "2vw",
              padding: "1vh 2vw",
              fontSize: "1.8vh",
              zIndex: 1,
            }}
          >
            Add Book
          </button>

          {/* Main panel with books */}
          <BookList
            books={filteredBooks}
            onRemove={handleRemoveBook}
            onReadStatus={handleReadStatusBook}
          />
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {showAddModal && (
        <AddBookModal
          onAdd={handleAddBook}
          onClose={() => setShowAddModal(false)}
          nextId={crypto.randomUUID()}
        />
      )}
    </div>
  );
};

export default App;
