import { Link, useLoaderData } from "react-router-dom";
import "./ServicesDetails.css";
import img1 from "../../assets/images/services/number.png";
import img2 from "../../assets/images/services/number2.png";
import img3 from "../../assets/images/services/number3.png";
import img4 from "../../assets/images/services/play-button-png.webp";
import logo from "../../assets/logo.svg";
import { FaFile, FaArrowRight } from "react-icons/fa";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);

  const { _id, img, description, title, facility, price } = serviceData;
  return (
    <div className="mx-auto">
      <div className="serviceDetails_bg rounded-md mb-32 mt-16">
        <h2 className="text-5xl font-bold text-white pl-16 pt-28">Service Details</h2>
        <p className="text-lg text-red-600 font-bold mt-2 pl-16 ml-1 ">Home-Service Details</p>
      </div>
      <div className="service-container gap-10">
        <div>
          <img className="mb-12  w-[780px] rounded-md" src={img} alt="" />
          <h2 className="text-3xl font-bold mb-7">{title}</h2>
          <p className="text-lg text-gray-500">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-7">
            {facility.map((singleFacility, index) => (
              <div key={index} className="service-box p-10">
                <p className="text-xl font-bold">{singleFacility.name}</p>
                <p className="text-base text-gray-500">
                  {singleFacility.details}
                </p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-500">{description}</p>
          <h2 className="text-3xl font-bold mt-12 mb-7">3 Simple Steps to Process</h2>
          <p className="text-lg text-gray-500">{description}</p>
          <div className="sm:flex gap-5 my-7">
            <div className="step-box text-center p-6">
              <img className="w-[72px] mx-auto -mt-2" src={img1} alt="" />
              <h6 className="text-xl font-bold -mt-1">Step One</h6>
              <p className="text-base text-gray-500">
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className="step-box mx-auto text-center p-6">
              <img className="w-14 mx-auto" src={img2} alt="" />
              <h6 className="text-xl font-bold mt-4">Step Two</h6>
              <p className="text-base text-gray-500">
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className="step-box text-center p-6">
              <img className="w-14 mx-auto" src={img3} alt="" />
              <h6 className="text-xl font-bold mt-3">Step Three</h6>
              <p className="text-base text-gray-500">
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
          </div>
          <div className="service-video mb-12 rounded-md">
            {/* <img src={img4} alt="" /> */}
            <img className="w-20 mx-auto pt-40" src={img4} alt="" />
          </div>
        </div>
        <div>
          <div className="service-category">
            <h4 className="text-2xl font-bold">Services</h4>
            <div className="w-[284px] h-[56px] my-4 flex items-center justify-between p-4 bg-red-600 rounded-md">
              <p className="text- font-bold text-white">Full Car Repair</p>
              <FaArrowRight className="text-white text-xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white my-4 flex items-center justify-between p-4  rounded-md">
              <p className="text-lg font-bold">Engine Repair</p>
              <FaArrowRight className="text-red-600 text-xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white my-4 flex items-center justify-between p-4  rounded-md">
              <p className="text-lg font-bold">Automatic Services</p>
              <FaArrowRight className="text-red-600 text-xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white my-4 flex items-center justify-between p-4  rounded-md">
              <p className="text-lg font-bold">Engine Oil Change</p>
              <FaArrowRight className="text-red-600 text-xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white my-4 flex items-center justify-between p-4  rounded-md">
              <p className="text-lg font-bold">Battery Charge</p>
              <FaArrowRight className="text-red-600 text-xl" />
            </div>
          </div>
          <div className="service-download mt-7">
            <h4 className="text-xl font-bold text-white">Download</h4>
            <div className="flex items-center justify-between my-6">
              <div className="flex gap-2 items-center">
                <div>
                  <FaFile className="text-white w-6 h-6" />
                </div>
                <div>
                  <h6 className="text-white text-base font-semibold">
                    Our Brochure
                  </h6>
                  <p className="text-gray-300">Download</p>
                </div>
              </div>
              <div className="bg-red-600 p-2 rounded-sm">
                <FaArrowRight className="text-white text-lg" />
              </div>
            </div>
            <div className="flex items-center justify-between my-6">
              <div className="flex gap-2 items-center">
                <div>
                  <FaFile className="text-white w-6 h-6" />
                </div>
                <div>
                  <h6 className="text-white text-base font-semibold">
                    Company Details
                  </h6>
                  <p className="text-gray-300">Download</p>
                </div>
              </div>
              <div className="bg-red-600 p-2 rounded-sm">
                <FaArrowRight className="text-white text-lg" />
              </div>
            </div>
          </div>
          <div className="service-quote mt-7">
            <img className="w-[141px] h-[115px]" src={logo} alt="" />
            <h6 className="text-xl font-bold mt-5 text-white">Need Help? We Are Here <br /> To Help You</h6>
            <div className="mt-7 w-[270px] h-[126px] rounded-lg bg-white py-5 px-10">
                <h6 className="text-xl font-bold"><span className="text-red-600">Car Doctor</span> Special</h6>
                <p className="font-semibold">Save up to <span className="text-red-600">60% off</span></p>
            </div>
            <div className="text-center -mt-8">
            <button className="btn bg-[#FF3811] hover:bg-[#d43718] border-none">Get A Quote</button>
            </div>
          </div>
          <p className="text-4xl font-bold my-7">Price ${price}</p>
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-block bg-[#FF3811] hover:bg-[#d43718] border-none">Proceed Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
