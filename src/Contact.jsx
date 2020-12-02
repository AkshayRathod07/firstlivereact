import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    FullName: "",
    Phone: "",
    Email: "",
    Message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is -   ${data.FullName} !,  my mobile no is -   ${data.Phone}!, my email is -   ${data.Email}!, my message for you -   ${data.Message}`)
  };
 
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">CONTACT US </h1>
      </div>
      <div className="container cotact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="FullName"
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Enter your fullname"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Phone"
                  value={data.Phone}
                  onChange={InputEvent}
                  placeholder="Enter your Phone no *optional"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Email"
                  value={data.Email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="Message"
                  value={data.Message}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary " type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
