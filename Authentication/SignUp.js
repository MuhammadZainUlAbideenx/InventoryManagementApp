import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Services/Api";

const SignUp = () => {
  const defaultValue = { username: "", email: "", phone: "", password: "" };
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const addUserDetails = async (e) => {
    e.preventDefault();
    if (!user) {
      // User is empty, do not navigate to login page
      alert("User details are missing. Please provide user information.");
      return;
    }
    await addUser(user).then(() => {
      alert(`${user.username} Signup Successful redirecting to login page`);
    });

    navigate("/login");
  };

  return (
    <>
      <body className="text-center" style={{ width: "500px", margin: "auto" }}>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="display-4">Please sign in</h1>

            <div className="form-floating">
              <input
                name="username"
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
                onChange={onValueChange}
                required
              />
              <label for="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
                onChange={onValueChange}
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="phone"
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
                onChange={onValueChange}
                required
              />
              <label for="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                style={{ marginTop: "10px" }}
                onChange={onValueChange}
                required
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              style={{ marginTop: "20px" }}
              onClick={addUserDetails}
              type="submit"
              disabled={
                !user.username || !user.email || !user.phone || !user.password
              }
            >
              Sign in
            </button>
            <button
              className="w-100 btn btn-lg btn-danger"
              style={{ marginTop: "20px" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              login
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
      </body>
    </>
  );
};
export default SignUp;
