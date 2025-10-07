import React from "react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header
      style={{
        height: "10vh",
        width: "100vw",
        padding: "1vh 2vw",
        backgroundColor: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ fontSize: "2.5vh" }}>My Library</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "1vh", width: "20vw", fontSize: "1.5vh" }}
      />
    </header>
  );
};

export default Header;
