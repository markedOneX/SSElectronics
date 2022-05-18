import React from "react";
import { useState } from "react";

function FormBox() {
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Problem, setProblem] = useState("");
  const [Info, setInfo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Mobile,
        Email,
        Problem,
        Info,
      }),
    });
    const data = await response;
    if (data.status === 200) {
      window.alert("Submission Successful. We'll get back to you soon.");
    } else {
      window.alert("ERROR: Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="formBox">
      <div className="contacttitle">
        <h3 className="d-flex justify-content-center p-2">Let us reach you</h3>
      </div>
      <div>
        <form id="form-class" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control shadow"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setMobile(e.target.value)}
              className="form-control shadow"
              name="mobile"
              placeholder="Mobile Number"
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control shadow"
              id="exampleFormControlInput1"
              placeholder="Email (Optional)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1" className="labels">
              There'something wrong with
            </label>
            <select
              defaultValue={"Choose One"}
              className="form-control shadow"
              id="exampleFormControlSelect1"
              onChange={(e) => setProblem(e.target.value)}
            >
              <option disabled>Choose One</option>
              <option>LED/LCD TV</option>
              <option>Video Camera</option>
              <option>Photo Camera</option>
              <option>Other (Please mention below)</option>
              <option>Legacy Hardware (VCR,Radio, VCD/DVD Players)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" className="labels">
              Tell us more about the problem
            </label>
            <textarea
              className="form-control shadow"
              onChange={(e) => setInfo(e.target.value)}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success shadow">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormBox;
