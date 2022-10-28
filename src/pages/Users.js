import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";

// create users component
const Users = () => {
  // state variables
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch users on page load
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=${page}&results=100&seed=abcded`
        );
        const data = await response.json();
        setUsers(data.results);
        setTotalPages(data.info.pages);
        setLoading(false);
      } catch (error) {
        if (error) {
          throw new Error(error);
        }
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  if (loading) {
    return <h2>Please wait....loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>Users</h2>
      <div className="users">
        {users.map((user) => {
          const { id, name, location, phone, email, picture } = user;

          return (
            <div className="user" key={id.value}>
              <img className="user__image" src={picture.large} />
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

      {/* PAGINATION */}
      <div className="pagination">
        <Pagination
          page={page}
          totalPages={totalPages}
          currentPage={currentPage}
          setPage={setPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Users;
