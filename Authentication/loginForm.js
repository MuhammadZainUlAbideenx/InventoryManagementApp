import { useState } from "react";

import { getUser } from "../Services/Api.js";
import { useNavigate } from "react-router-dom";

function LoginForm({}) {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  //   console.log(user);
  // };
  // const inputHandler = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  //   console.log(user);
  // };
  // const userLogin = async (e) => {
  //   e.preventDefault();
  //   await getUser(user);
  //   console.log(user);
  //   navigate("/order");
  // };
  const loginUser = async (e) => {
    e.preventDefault();
    await getUser(user).then((res) => {
      alert(res.data.message);
      if (res.data.message === "Login Successful") {
        navigate("/order");
      }
    });
  };

  return (
    <>
      <body className="text-center" style={{ width: "500px", margin: "auto" }}>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 class="display-4">Log in</h1>

            <div className="form-floating">
              <input
                value={user.email}
                name="email"
                type="email"
                onChange={handleChange}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
                required
              />
              <label for="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
              <input
                value={user.password}
                name="password"
                type="password"
                onChange={handleChange}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                style={{ marginTop: "10px" }}
                required
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              style={{ marginTop: "20px" }}
              onClick={loginUser}
              disabled={!user.email || !user.password}
            >
              login
            </button>
            <button
              className="w-100 btn btn-lg btn-danger"
              style={{ marginTop: "20px" }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
          </form>
        </main>
      </body>
    </>
  );
}
export default LoginForm;
