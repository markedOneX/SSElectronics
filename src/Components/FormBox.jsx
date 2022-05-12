import React from "react";

function FormBox() {
  return (
    <div className="formBox">
      <form>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            type="number"
            class="form-control"
            name="mobile"
            placeholder="Mobile Number"
            pattern="\d{10}"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email (Optional)"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            There'something wrong with:
          </label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>LED/LCD TV</option>
            <option>Video Camera</option>
            <option>Photo Camera</option>
            <option>Other (Please mention below)</option>
            <option>Legacy Hardware (VCR,Radio, VCD/DVD Players)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Please tell us more about the problem.
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default FormBox;
