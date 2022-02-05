import { Link } from "react-router-dom";

const Pagination = ({ setActive, active, state }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link
            to="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              setActive(active === 1 ? 1 : active - 1);
            }}
          >
            <i className="fal fa-chevron-left" />
          </Link>
        </li>
        {state &&
          state.map((s, i) => (
            <li className={`page-item ${active === s ? "active" : ""}`} key={i}>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(s);
                }}
                className="page-link"
              >
                {s}
              </Link>
            </li>
          ))}
        <li className="page-item">
          <Link
            to="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              setActive(active === state.length ? state.length : active + 1);
            }}
          >
            <i className="fal fa-chevron-right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
