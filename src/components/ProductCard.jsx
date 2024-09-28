import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/store" ? `col-${grid}` :"col-3" }`}>
        <Link to="/" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/">
              <img src="/images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi coloured for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate voluptatibus amet corporis laborum ratione error deserunt, optio exercitationem tempora neque dolore illum voluptates officiis. Libero ex id voluptas dignissimos.</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="/">
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="/">
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link to="/">
                <img src="images/add-cart.svg" alt="addtocart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/store" ? `col-${grid}` :"col-3" }`}>
        <Link to="/" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/">
              <img src="/images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi coloured for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate voluptatibus amet corporis laborum ratione error deserunt, optio exercitationem tempora neque dolore illum voluptates officiis. Libero ex id voluptas dignissimos.</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="/">
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="/">
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link to="/">
                <img src="images/add-cart.svg" alt="addtocart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
