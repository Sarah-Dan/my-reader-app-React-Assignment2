import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

// create users component
const Users = () => {
  // state variables
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages] = useState(5);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch users on page load
  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abcded`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);
  return (
    <div className="users">
      <div className="register">
        <h3>Join Reader! users all over the world</h3>
        <div className="signup">
          <Link to="SignUp" className="register__btn">
            Register
          </Link>
        </div>
      </div>
      <h2 className="users__heading">Users</h2>

      <div className="users__container">
        {loading && <p>Please wait....Loading...</p>}
        {error && <p>{error.message}</p>}
        <div className="users__list">
          {users.map((user) => {
            const { index, name, location, phone, email, picture } = user;

            return (
              <div className="user" key={index}>
                <img className="user__image" src={picture.large} alt="user" />
                <div className="user__info">
                  <div className="user__name">
                    Name: {name.first} {name.last}
                  </div>
                  <p className="user__phone">Phone: {phone}</p>
                  <p className="user__email">Email: {email}</p>
                  <p className="user__country">Country:{location.country}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {
            <button
              className="page__btn"
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
          }
          {Array.from(Array(totalPages), (e, i) => {
            return (
              <button
                className="array__btn"
                key={i}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            );
          })}
          {
            <button
              className="page__btn"
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          }
          <p>
            {" "}
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
