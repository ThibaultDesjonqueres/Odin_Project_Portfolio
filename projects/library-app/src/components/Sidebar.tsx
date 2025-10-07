import React from "react";

interface SidebarProps {
  genres: string[];
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <aside
      style={{
        width: "20vw",
        height: "80vh",
        padding: "2vh 1vw",
        borderRight: "0.2vh solid #ccc",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "2vh" }}>Genres</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.8vh" }}>
        <li
          style={{
            cursor: "pointer",
            marginBottom: "1.5vh",
            fontWeight: selectedGenre === "" ? "bold" : "normal",
          }}
          onClick={() => setSelectedGenre("")}
        >
          All
        </li>
        {genres.map((genre) => (
          <li
            key={genre}
            style={{
              cursor: "pointer",
              marginBottom: "1.5vh",
              fontWeight: selectedGenre === genre ? "bold" : "normal",
            }}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
