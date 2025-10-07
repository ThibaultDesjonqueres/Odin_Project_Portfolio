function Message() {
  const name = "Thibault";

  if (name.length > 0) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1>Hello, Stranger</h1>;
  }
}

export default Message;
