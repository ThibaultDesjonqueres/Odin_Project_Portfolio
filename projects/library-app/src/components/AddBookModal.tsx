import React, { useState } from "react";
import type { Book } from "../types";

interface AddBookModalProps {
  onAdd: (book: Book) => void;
  onClose: () => void;
  nextId: string;
}

const AddBookModal: React.FC<AddBookModalProps> = ({
  onAdd,
  onClose,
  nextId,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState<number | "">("");
  const [genre, setGenre] = useState("");

  const handleSubmit = () => {
    if (!title || !author || !pages || pages <= 0 || !genre) {
      alert("Please fill in all fields with valid data!");
      return;
    }

    onAdd({ id: nextId, title, author, pages: Number(pages), genre });
    onClose();
    setTitle("");
    setAuthor("");
    setPages("");
    setGenre("");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "3vh",
          borderRadius: "1vh",
          width: "30vw",
        }}
      >
        <h2 style={{ fontSize: "2vh" }}>Add a Book</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "1vh",
            fontSize: "1.8vh",
            marginBottom: "1vh",
          }}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            width: "100%",
            padding: "1vh",
            fontSize: "1.8vh",
            marginBottom: "1vh",
          }}
        />
        <input
          type="number"
          placeholder="Pages"
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "1vh",
            fontSize: "1.8vh",
            marginBottom: "1vh",
          }}
        />
        <input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            width: "100%",
            padding: "1vh",
            fontSize: "1.8vh",
            marginBottom: "1vh",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handleSubmit}
            style={{ padding: "1vh 2vw", fontSize: "1.8vh" }}
          >
            Add
          </button>
          <button
            onClick={onClose}
            style={{ padding: "1vh 2vw", fontSize: "1.8vh" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
