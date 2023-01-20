import React from "react";

const MobileApp = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 gx-5">
      <div className="text-body col py-5">
        <h2 className="title fw-bold">Manage everything from your mobile</h2>
        <p>
          Download the app to browse gameCheap on the go!
        </p>
        <div className="badges mt-5">
          <p>Get the App</p>
          <div className="badges-items me-3 d-none d-sm-block">
            <a className="badge-item text-decoration-none" href="#1">
              <img
                className="item"
                src="https://raw.githubusercontent.com/SuccessfullSites/Agency-Website/b964fb262a6f3a7e468b6377c6e5fc1e6be1d22a/Images/Store%20badge-1.svg"
                alt=""
                srcset=""
              />
            </a>
            <a className="badge-item text-decoration-none" href="#2">
              <img
                className="item"
                src="https://raw.githubusercontent.com/SuccessfullSites/Agency-Website/b964fb262a6f3a7e468b6377c6e5fc1e6be1d22a/Images/Store%20badge.svg"
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col container-body overflow-hidden">
        <img className="img-fluid" src="./Images/mockup-mobiles.png" alt="" />
      </div>
    </div>
  );
};

export default MobileApp;
