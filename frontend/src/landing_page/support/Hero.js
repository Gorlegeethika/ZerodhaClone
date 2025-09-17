function Hero() {
  
  return (
    <>
      {/* Top Header Section */}
      <div
        className="container-fluid mb-4 bg-body-secondary"
        style={{ height: "210px" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mt-4">Support Portal</h1>
          <button type="button" className="btn btn-primary mt-5">
            My tickets
          </button>
        </div>

        <div className="mt-4">
          <form>
            <div className="input-group">
              <span
                className="input-group-text"
                style={{
                  borderRadius: "0px",
                  backgroundColor: "white",
                  border: "1px solid #ced4da",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="search"
                placeholder="Eg: How do I open my account, How do I activate F&O"
                className="form-control"
                id="search"
                style={{
                  height: "60px",
                  borderRadius: "0px",
                  boxShadow: "none",
                  outline: "none",
                }}
              />
            </div>
          </form>
        </div>
      </div>

     
    </>
  );
}

export default Hero;
