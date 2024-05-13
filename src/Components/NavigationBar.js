

const Navigationbar = (props) => {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-white">
             <a class="navbar-brand ms-2" href="#">My Website</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Menu</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Book Table</a>
                    </li>
                </ul>
            </div>
            <form class="d-flex" role="search">
                    <input class="form-control" type="search" placeholder="Search"/>
                    <button class="btn btn-outline-success me-2" type="submit">Search</button>
            </form>
        </nav>

        <div className="position-relative d-flex align-items-end justify-content-start " style={{height: '800px'}}>
            <img src={props.img} className="w-100 h-100 position-absolute"/>
            <div className="overlay"></div>
            <div className="position-absolute welcome">
                <span></span>
                <h1 style={{color: 'white'}}>Fast Food Restaurant</h1>
                <p style={{color: 'white', width: '500px'}}>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                <button className="btn btn-dark">Order Now</button>
            </div>
        </div>
        </>
     );
}
 
export default Navigationbar;

