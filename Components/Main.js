import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <body className="d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1>Pricing</h1>
            <p className="lead">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead">
              <Link
                to="/order"
                className="btn btn-lg btn-light fw-bold border-white bg-white"
              >
                Get Started
              </Link>
            </p>
          </main>

          <footer className="mt-auto text-white-50">
            <p>
              Cover template for{" "}
              <a href="https://getbootstrap.com/" className="text-white">
                Bootstrap
              </a>
              , by{" "}
              <a href="https://twitter.com/mdo" className="text-white">
                @mdo
              </a>
              .
            </p>
          </footer>
        </div>
      </body>
    </>
  );
}
export default Main;
