// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
//   useLocation,
// } from "react-router-dom";

// import AddProduct from "./Components/addProducts";
// import Nav from "./Components/Nav";
// import LoginForm from "./Authentication/loginForm";
// import SignUp from "./Authentication/SignUp";
// import OrderForm from "./Components/order";
// import ViewRecord from "./Components/inventoryRecord";
// import Main from "./Components/Main";

// function App() {
//   const location = useLocation();

//   // Check if the current path matches "login" or "signup"
//   const isLoginPage = location.pathname === "/login";
//   const isSignUpPage = location.pathname === "/signup";

//   // Determine whether to show or hide the Nav component
//   const shouldShowNav = !isLoginPage && !isSignUpPage;

//   return (
//     <>
//       <BrowserRouter>
//         {shouldShowNav && <Nav />}
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/addproduct" element={<AddProduct />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/order" element={<OrderForm />} />
//           <Route path="/view" element={<ViewRecord />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AddProduct from "./Components/addProducts";
import Nav from "./Components/Nav";
import LoginForm from "./Authentication/loginForm";
import SignUp from "./Authentication/SignUp";
import OrderForm from "./Components/order";
import ViewRecord from "./Components/inventoryRecord";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <NavigationWrapper />
    </BrowserRouter>
  );
}

function NavigationWrapper() {
  const location = useLocation();

  // Check if the current path matches "login" or "signup"
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";

  // Determine whether to show or hide the Nav component
  const shouldShowNav = !isLoginPage && !isSignUpPage;

  return (
    <>
      {shouldShowNav && <Nav />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/view" element={<ViewRecord />} />
      </Routes>
    </>
  );
}

export default App;
