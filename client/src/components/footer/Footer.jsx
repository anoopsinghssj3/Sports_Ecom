import React from "react";
import { Link } from "react-router-dom"

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
              <li><Link to="#" className="nav-link p-0">Cricket</Link></li>
              <li><Link to="#" className="nav-link p-0">Football</Link></li>
              <li><Link to="#" className="nav-link p-0">Badminton</Link></li>
              <li><Link to="#" className="nav-link p-0">Fitness</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Customer Care</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="nav-link p-0">Contact Us</Link></li>
              <li><Link to="#" className="nav-link p-0">Return Policy</Link></li>
              <li><Link to="#" className="nav-link p-0">Shipping Info</Link></li>
              <li><Link to="#" className="nav-link p-0">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Connect</h5>
            <p>Email: support@sportstore.com</p>
            <p>Phone: +91-9876543210</p>
            <div className="d-flex gap-2">
              <Link to="#"><i className="bi bi-facebook text-white"></i></Link>
              <Link to="#"><i className="bi bi-instagram text-white"></i></Link>
              <Link to="#"><i className="bi bi-twitter text-white"></i></Link>
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
