import data from "./data";

// create books component

const Books = () => {
  return (
    <div className="books__container">
      <h2>Favorite Books</h2>

      {data.map((book) => {
        return (
          <div className="book__list" key={book.id}>
            <div className="book__info">
              <h3 className="book__title">{book.title}</h3>
              <p className="book__author">{book.author}</p>
              <p className="book__description">{book.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
