import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function BookingForm() {
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [loanType, setLoanType] = useState("");
  const [lastName, setLastname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const [services, setServices] = useState([]);

  //get services
  useEffect(() => {
    fetch("https://api.smartmovefinancial.com.au/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
        }
      });
  }, []);

  //post appointment
  const addAppointment = async (e) => {
    setLoader(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("service_id", loanType);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone", phoneNumber);
    formData.append("email", email);
    formData.append("location", address);
    formData.append("message", message);
    try {
      const response = await fetch(
        "https://api.homegrowbd.com/api/appointment/store",
        {
          method: "POST",
          body: formData,
          headers: {
            // Add any necessary headers, such as authorization
          },
        }
      );
      const data = await response.json();
      if (data.status === true) {
        window.alert(data.msg);
        //   handleOpen();
        setLoader(false);
      }
    } catch (error) {
      console.log("Error:", error);
      setLoader(false);
    }
  };

  return (
    <form className="!py-10 md:!py-20">
      <h5 className="!text-xl lg:!text-3xl text-primary font-semibold text-center">
        Book Appointment
      </h5>

      <div className="!mt-5 md:!mt-10">
        <label
          className="block text-gray-700"
          htmlFor="service"
        >
          Select Service
        </label>
        <select
          id="service"
          onChange={(e) => setLoanType(e.target.value)}
          className="!mt-2 block w-full !px-4 !py-2 border rounded shadow-sm focus:outline-none"
        >
          {services?.map((s, i) => (
            <option key={i} value={s?.id}>
              {s?.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-2.5 md:gap-5 !mt-2.5 md:!mt-5">
        <div>
          <label className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            required
            onChange={(e) => setFirstname(e.target.value)}
            className="!mt-2 block w-full !px-4 !py-3 border rounded shadow-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            required
            onChange={(e) => setLastname(e.target.value)}
            className="!mt-2 block w-full !px-4 !py-3 border rounded shadow-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            required
            onChange={(e) => setphoneNumber(e.target.value)}
            className="!mt-2 block w-full !px-4 !py-3 border rounded shadow-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="!mt-2 block w-full !px-4 !py-3 border rounded shadow-sm focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700">
            Enter Address
          </label>
          <textarea
            required
            onChange={(e) => setAddress(e.target.value)}
            className="!mt-2 block w-full !px-4 !py-3 border rounded shadow-sm focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700">
            Enter Message
          </label>
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            className="!mt-2 block w-full !px-4 !py-3 border rounded shadow-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="!mt-5 md:!mt-10 flex justify-center">
        <button
          onClick={addAppointment}
          className="!px-6 !py-3 bg-[#CEB666] text-white rounded shadow-md flex items-center gap-3 cursor-pointer"
          disabled={
            firstName === "" ||
            lastName === "" ||
            phoneNumber === "" ||
            email === "" ||
            address === "" ||
            message === ""
          }
        >
          Book Now
          {loader && <FaSpinner className="h-4 w-4 animate-spin" />}
        </button>
      </div>
    </form>
  );
}
