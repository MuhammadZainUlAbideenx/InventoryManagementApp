import React, { useState } from "react";
import { addProduct } from "../Services/Api";

function AddProduct() {
  const [formData, setFormData] = useState({
    company: "",
    product: "",
    quantity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addProduct(formData);
    console.log(formData);
    alert("Product Added");
  };

  return (
    <body className="text-center" style={{ width: "500px", margin: "auto" }}>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="display-4">Add Product</h1>

          <div className="form-floating" style={{ marginTop: "10px" }}>
            <select
              className="form-select"
              id="dropdown1"
              name="company"
              value={formData.company}
              onChange={handleChange}
            >
              <option>Select Company</option>
              <option>Suzuki</option>
              <option>Toyota</option>
              <option>KIA</option>
            </select>
          </div>

          <div className="form-floating" style={{ marginTop: "10px" }}>
            <select
              className="form-select"
              id="dropdown2"
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <option>Select Product</option>
              <option>Tire</option>
              <option>Door</option>
              <option>Trunk</option>
            </select>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              style={{ marginTop: "10px", width: "150px" }}
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Add Quantity</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            style={{ marginTop: "20px" }}
            type="submit"
          >
            Add
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
        </form>
      </main>
    </body>
  );
}

export default AddProduct;

// import { useState } from "react";
// function AddProduct() {
//   return (
//     <>
//       <body className="text-center" style={{ width: "500px", margin: "auto" }}>
//         <main className="form-signin w-100 m-auto">
//           <form>
//             <h1 class="display-4">Add Product</h1>

//             <div className="form-floating" style={{ marginTop: "10px" }}>
//               <select className="form-select" id="dropdown1">
//                 <option>Select Company</option>
//                 <option>Suzuki</option>
//                 <option>Toyota</option>
//                 <option>KIA</option>
//               </select>
//             </div>

//             <div className="form-floating" style={{ marginTop: "10px" }}>
//               <select className="form-select" id="dropdown2">
//                 <option>Select Product</option>
//                 <option>Tire</option>
//                 <option>Door</option>
//                 <option>Trunk</option>
//               </select>
//             </div>
//             <div className="form-floating">
//               <input
//                 type="number"
//                 className="form-control"
//                 id="floatingInput"
//                 placeholder="name@example.com"
//                 style={{ marginTop: "10px", width: "150px" }}
//               />
//               <label htmlFor="floatingInput">Add Quantity</label>
//             </div>

//             <button
//               className="w-100 btn btn-lg btn-primary"
//               style={{ marginTop: "20px" }}
//               type="submit"
//             >
//               Add
//             </button>
//             <p className="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
//           </form>
//         </main>
//       </body>
//     </>
//   );
// }
// export default AddProduct;
