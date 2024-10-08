import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const Singleblog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p>
                You're only as good as your last collection, which is an
                enourmous pressure. I think there is something about luxury.It's
                not something people need, but it's what they want. It really
                pulls at their heart. I have a fantastic relationship with
                money. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Esse, illum? At repellendus et odio a quia quam itaque, nam
                illo, fuga atque enim similique. Fugiat quis ipsa pariatur
                deserunt id.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
