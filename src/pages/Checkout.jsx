import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg"

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Sapa Zone</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  arial-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-active">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /&nbsp;
                    <li className="breadcrumb-item active total-active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-active">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Zetsu (olatunjiolanrewaju228@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, Suite,etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zipcode"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" /> Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                        <span style={{top:"-10px", right:"2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                        <img src={watch} className="img-fluid" alt="product-image" />
                    </div>
                    <div>
                        <h5 className="title">Watch</h5>
                        <p className="total-price">$ 1000</p>
                    </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 1000</h5>
                </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-nav-item">
                  <p className="total">Subtotal</p>
                  <p className="total-pricce">$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-nav-item">
                  <p className="mb-0 total">Total</p>
                  <p className="mb-0 total price">$ 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-nav-item py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
