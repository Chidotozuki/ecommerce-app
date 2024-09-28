import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";


const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <iframe title="location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126631.71887425083!2d3.7941892627820772!3d7.326781905056798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x10398e7af2bddd35%3A0xc51cd35a1d00c3c2!2s8VGG%2BPJ8%20Lead%20City%20University%2C%20Ibadan%2C%20Toll-Gate%20Area%2C%20Off%20Oba%20Otudeko%20Ave%2C%20Ibadan%20200255%2C%20Oyo%2C%20Nigeria!3m2!1d7.3267894!2d3.8765912!5e0!3m2!1sen!2sng!4v1727527992989!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="emil" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comment"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome className="fs-5" />
                      <address className="mb-0">Lead City University, Ibadan</address></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><BiPhoneCall className="fs-5" />
                      <a href="tel: +234 1234567890">+234 1234567890</a></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className="fs-5" />
                      <a href="mailto:olatunjiolanrewaju228@gmail.com">olatunjiolanrewaju228@gmail.com</a></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><BiInfoCircle className="fs-5" /><p className="mb-0">Monday - Friday 10 AM- 8 PM</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
