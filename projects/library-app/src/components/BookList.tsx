import React from "react";
import type { Book } from "../types";

interface BookListProps {
  books: Book[];
  onRemove: (id: string) => void; // add this
  onReadStatus: (id: string) => void; // add this
}

const BookList: React.FC<BookListProps> = ({
  books,
  onRemove,
  onReadStatus,
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(12vw, 1fr))",
      gap: "3vw",
      marginTop: "7.5vh",
      marginLeft: "1vw",
      marginRight: "1vw",
    }}
  >
    {books.map((book) => (
      <div
        key={book.id}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // content top, buttons bottom
          padding: "1.5vh",
          border: "0.2vh solid #ccc",
          borderRadius: "1vh",
          minHeight: "15vh",
          boxSizing: "border-box",
        }}
      >
        <div>
          <h3 style={{ fontSize: "2vh", wordBreak: "break-word" }}>
            {book.title}
          </h3>
          <p style={{ fontSize: "1.8vh", wordBreak: "break-word" }}>
            Author: {book.author}
          </p>
          <p style={{ fontSize: "1.5vh" }}>Pages: {book.pages}</p>
          <p style={{ fontSize: "1.5vh" }}>Genre: {book.genre}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => onRemove(book.id)}
            style={{ padding: "0.5vh 1vw", fontSize: "1.5vh" }}
          >
            Remove
          </button>
          <button
            onClick={() => onReadStatus(book.id)}
            style={{
              padding: "0.5vh 1vw",
              fontSize: "1.5vh",
              minWidth: "max-content",
              backgroundColor: book.readStatus ? "#4CAF50" : "#f44336", // green if read, red if not
              color: "#fff", // white text
              border: "none",
              borderRadius: "0.5vh",
            }}
          >
            {book.readStatus ? "Read" : "Not Read"}
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default BookList;
