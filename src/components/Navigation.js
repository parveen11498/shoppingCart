function Navigation({cartItems}){
    const noItemsCart = cartItems.length;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="#!">Start Bootstrap</a>
              <a classname="home" href="Home.js" style={{paddingLeft:"30px", color:"black"}}>Home</a>
              <a classname="About" href="cart.js" style={{paddingLeft:"30px", color:"black"}}>About</a>
              <a classname="Shop" href="home.js"><select style={{border:"none", paddingLeft:"30px", backgroundColor:"white"}}><option>shop</option></select></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:"500px"}}>
                  <form className="d-flex">
                      <button className="btn btn-outline-dark" type="submit" >
                          <i className="bi-cart-fill me-1" ></i>
                          Cart
                          <span className="badge bg-dark text-white ms-1 rounded-pill">{noItemsCart}</span>
                      </button>
                  </form>
              </div>
          </div>
      </nav>
    )
}

export default Navigation;