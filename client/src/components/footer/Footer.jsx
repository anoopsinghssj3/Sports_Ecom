import React from "react";

function Footer() {
  return (
    <footer className="navbar text-white mt-5">
      <div className="container py-4">
        <div className="row w-100">

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">About</h5>
            <p>We offer the best sports equipment and gear at unbeatable prices.</p>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Sports</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link p-0">Cricket</a></li>
              <li><a href="#" className="nav-link p-0">Football</a></li>
              <li><a href="#" className="nav-link p-0">Badminton</a></li>
              <li><a href="#" className="nav-link p-0">Fitness</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Customer Care</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link p-0">Contact Us</a></li>
              <li><a href="#" className="nav-link p-0">Return Policy</a></li>
              <li><a href="#" className="nav-link p-0">Shipping Info</a></li>
              <li><a href="#" className="nav-link p-0">FAQs</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Connect</h5>
            <p>Email: support@sportstore.com</p>
            <p>Phone: +91-9876543210</p>
            <div className="d-flex gap-2">
              <a href="#"><i className="bi bi-facebook text-white"></i></a>
              <a href="#"><i className="bi bi-instagram text-white"></i></a>
              <a href="#"><i className="bi bi-twitter text-white"></i></a>
            </div>
          </div>

        </div>

        <div className="text-center mt-3 border-top pt-3">
          <small className="text-white-50">© {new Date().getFullYear()} SportStore. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
