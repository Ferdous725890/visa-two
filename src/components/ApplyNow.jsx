import React, { useContext } from "react";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ApplyNow = () => {
  const { user } = useContext(Authcontext);
  const handelApplyNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const date = form.date.value;
    const fee = form.fee.value;

    const UserApplicationInformation = {
      firstname,
      lastname,
      email,
      date,
      fee,
      email: user.email,
    };
    console.log(UserApplicationInformation);

    fetch("http://localhost:3000/applicationVisa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UserApplicationInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review submitted successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2>Visa Application</h2>

      <div>
        <form onSubmit={handelApplyNow} className="card-body text-black">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Second Name or Last Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* User Email */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Inter Your Valied Email "
              className="input input-bordered"
              required
            />
          </div>

          {/* Date */}

          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Application_Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>

          {/* Application Fee */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Application Fee</span>
            </label>
            <input
              type="number"
              name="fee"
              placeholder="Fee "
              className="input input-bordered"
              required
            />
          </div>

          <div className="btn  btn-primary">
            <button>Apply For Visa </button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ApplyNow;
