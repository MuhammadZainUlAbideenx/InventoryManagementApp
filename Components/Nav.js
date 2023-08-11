import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Inventory App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addproduct" className="nav-link">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/view" className="nav-link ">
                  View
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/order" className="nav-link ">
                  Place Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  log in
                </Link>
              </li>
            </ul>

            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
