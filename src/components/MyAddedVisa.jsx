import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";

const MyAddedVisa = () => {
  const { user } = useContext(Authcontext);
  const [visas, setVisas] = useState([]);

  // Fetch the visa data
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/myaddVisa?email=${encodeURIComponent(
          user.email
        )}`
      )
      .then((res) => {
        setVisas(res.data);
      })
      .catch((error) => console.error("Error fetching visa data:", error));
  }, [user.email]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Added Visa Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
            >
              <img
                src={visa.photo}
                alt={`${visa.name}'s visa`}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{visa.name}</h3>
              <p>
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p>
                <strong>Email:</strong> {visa.email}
              </p>
              <p>
                <strong>Processing Time:</strong> {visa.ProcessingTime}
              </p>
              <p>
                <strong>Age:</strong> {visa.age}
              </p>
              <p>
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p>
                <strong>Document:</strong> {visa.document}
              </p>
              <p>
                <strong>ID:</strong> {visa._id}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAddedVisa;
