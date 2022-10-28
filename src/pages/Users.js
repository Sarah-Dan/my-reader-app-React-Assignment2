// Set up client-side pagination using random.me API in one of your routes called Users -
// you should show the prev, next, and navigation to individual pages 1, 2, 3, 4, 5 etc.

import { useState, useEffect } from "react";

// create users component
const Users = () => {
  // state variables
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);    
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch users on page load
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=${page}&results=10&seed=abcded`
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
          const { id, name, country, phone, email, picture } = user;
          return (
            <div className="user" key={id.value}>
              <img className="user__image" src={picture.large} alt={name.first} />
              <div className="user__info">
                <div className="user__name">
                  Name: {name.first} {name.last}
                </div>
                 <p className="user__phone">Phone: {phone}</p>
                <p className="user__email">Email: {email}</p>
                <p className="user__country">Country:{country}</p>
              </div>
            </div>
          );
        })}
      </div>

{/* PAGINATION */}
      <div className="pagination">
        <button
          className="pagination__button"

          onClick={() => {
            if (currentPage > 1) {
              setPage(currentPage - 1);


              setCurrentPage(currentPage - 1);
            }

          }}
        >
          Prev
        </button>
        <button
          className="pagination__button"
          onClick={() => {
            if (currentPage < totalPages) {
              setPage(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>


   </div>
    </div>
  );
};

export default Users;      

    {/* //     previous button
    //     <button
    //       className="prev"
    //       onClick={() => 
    // setPage((previousPage) => Math.max(previousPage - 1, 1))}
    //       disabled={page === 1}
    //     > */}
    {/* //       Previous
    //       {/* {" "}
    //       Prev{" "} */}
    {/* //     </button> */} 
    {/* //     <span>{page}</span> */}
        {/* next button */}
    {/* //     <button */}
    {/* //       className="next" */}
    {/* //       onClick={() => */}
    {/* //         setPage((previousPage) => (!users.length ? previousPage : previousPage + 1))
    //         // Math.min(previousPage + 1, totalPages))
    //       }
    //       disabled={page === totalPages}
    //     > */}
    {/* //       {" "}
    //       Next{" "}
    //     </button> */}
    {/* //   </div> */}
     {/* </div> */}


