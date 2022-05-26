function ToolBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={require("../images/Rectangle_74.png")} width={100} height={34} className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className=" btn btn-success ">Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default ToolBar;