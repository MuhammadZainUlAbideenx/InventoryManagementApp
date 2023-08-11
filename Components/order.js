const OrderForm = () => {
  return (
    <>
      <body className="text-center" style={{ width: "500px", margin: "auto" }}>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 class="display-4">Place Order</h1>

            <div className="form-floating" style={{ marginTop: "10px" }}>
              <select className="form-select" id="dropdown1">
                <option>Select Company</option>
                <option>Suzuki</option>
                <option>Toyota</option>
                <option>KIA</option>
              </select>
            </div>

            <div className="form-floating" style={{ marginTop: "10px" }}>
              <select className="form-select" id="dropdown2">
                <option>Select Product</option>
                <option>Tyre</option>
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
              />
              <label htmlFor="floatingInput">Add Quantity</label>
            </div>
            <div className="form-floating">
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginTop: "10px" }}
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Address"
                style={{ marginTop: "10px" }}
              />
              <label htmlFor="floatingInput">Address</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              Order
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
          </form>
        </main>
      </body>
    </>
  );
};

export default OrderForm;
