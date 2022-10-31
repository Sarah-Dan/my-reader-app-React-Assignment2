// create a Home component
const Home = () => {
  return (
    <div className="homepage">
      <div className="home__content">
        <h2 className="home__greeting">
          Welcome to <span>Reader!</span>
        </h2>
        <p className="home__description">
          A book reading app that allows you to search for books and add them to
          your reading list.
        </p>
      </div>
      {/* search bar .....add to the app*/}
      <form
        action="https://books.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        method="get"
        className="book__search"
      >
        <input
          className="book__search--input"
          type="text"
          placeholder="Search for your favorite books"
        />
        <button className="book__search--btn" type="submit">
          <img
            src={require("../Images/searchicon.png")} alt="search icon"
            style={{ width: 30 }}
          />
        </button>
      </form>

      <div className="quote">
        <p className="quote__text">
          “A reader lives a thousand lives before he dies . . . The man who
          never reads lives only one.”
        </p>
        <p className="quote__author">George R.R. Martin</p>
      </div>
    </div>
  );
};

export default Home;
