import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";

const MyVisaApplication = () => {
  const { user } = useContext(Authcontext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/applicationVisa?email=${encodeURIComponent(
        user.email
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setApplications(data);
        } else {
          setApplications([data]);
        }
      })
      .catch((error) => console.error("Error fetching applications:", error));
  }, [user.email]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Visa Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">
                {app.firstname} {app.lastname}
              </h3>
              <p>
                <strong>Email:</strong> {app.email}
              </p>
              <p>
                <strong>Fee:</strong> ${app.fee}
              </p>
              <p>
                <strong>Date:</strong> {new Date(app.date).toLocaleDateString()}
              </p>
              <p>
                <strong>ID:</strong> {app._id}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyVisaApplication;
