import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 text-decoration-none">
    <div className="container-fluid text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">GAME CHEAP</h5>
          <p className="text-left">
            A service of Abdudevs Limited,
            <br />
            Nowhata, Paba, Rajshahi. <br />
            abdudevs@gmail.com
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Important Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-decoration-none">
                Terms And Conditions
              </a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Socials</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-decoration-none">
                Twitter
              </a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none">
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none">
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a
        href="https://github.com/abdullahwins"
        className="text-decoration-none"
      >
        abdudevs.com
      </a>
    </div>
  </footer>
);

export default Footer;
