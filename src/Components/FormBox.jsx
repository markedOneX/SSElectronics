import React from "react";

function FormBox() {
  return (
    <div className="formBox">
      <div className="contacttitle">
        <h3 className="d-flex justify-content-center p-2">Let us reach you</h3>
      </div>
      <div>
        <form id="form-class">
          <div className="form-group">
            <input
              type="text"
              class="form-control shadow"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              class="form-control shadow"
              name="mobile"
              placeholder="Mobile Number"
              maxLength="10"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              class="form-control shadow"
              id="exampleFormControlInput1"
              placeholder="Email (Optional)"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1" className="labels">
              There'something wrong with -
            </label>
            <select class="form-control shadow" id="exampleFormControlSelect1">
              <option disabled selected>
                Choose One
              </option>
              <option>LED/LCD TV</option>
              <option>Video Camera</option>
              <option>Photo Camera</option>
              <option>Other (Please mention below)</option>
              <option>Legacy Hardware (VCR,Radio, VCD/DVD Players)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1" className="labels">
              Please tell us more about the problem.
            </label>
            <textarea
              class="form-control shadow"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <button className=" btn btn-success shadow">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormBox;
