import { Link, useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const data = useLoaderData(); // Assuming `data` contains an object with details like `title`, `description`, and `image`.
  console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src={data.photo}
            alt={data.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {data.ProccingTime}
            </h2>
            <h2 className=" font-bold text-gray-800 mb-2">{data.document}</h2>
            <p className="text-gray-600 text-sm">
              {data.description ||
                "This is a placeholder description for the Visa card. Add your dynamic content here."}
            </p>
            <p> $ {data.fee} </p>
          </div>
          <div className="p-5 flex items-center justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300">
              Learn More
            </button>
            <Link to={"/ApplyNow"}>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none transition duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
