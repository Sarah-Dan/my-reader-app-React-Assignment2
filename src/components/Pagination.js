// create a Pagination component
const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        paginate(pageNumbers[pageNumbers.length - 1]);
    };

    const prevPage = () => {
        paginate(pageNumbers[0]);
    };
    
    return (
        <div>
        <ul className="pagination">
            {pageNumbers.map((number) => (
            <li key={number} className="page-item">
                <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );

};

export default Pagination;