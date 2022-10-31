import "../assets/styles/page404.css";

// create a 404 page component
const Page404 = () => {
  const error = {
    title: "Page not found",
    message: "Eyyah!....The page you are looking for does not exist.",
    img: "404anime.png",
  };

  return (
    <div className="page404__content">
      <h2 className="page404__title">{error.title}</h2>
      <img
        className="page404__image"
        src={require(`../Images/${error.img}`)}
        alt="404"
      />

      <p className="page404__message">{error.message}</p>
      <a href="/" className="page404__link">
        Go back to home
      </a>
    </div>
  );
};

export default Page404;
