// import { Card, p } from "@material-tailwind/react";
import { useEffect, useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
import { AiFillEye } from "react-icons/ai";
import LoaderPage from "../../Components/Shared/LoaderPage";
import { MdDelete } from "react-icons/md";
const Appointment = () => {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [singleAppointment, setSingleAppointment] = useState({});

  const TABLE_HEAD = ["Loan type", "Name", "Phone number", "Email", "View"];

  const handleOpen = (data) => {
    setOpen(!open);
    setSingleAppointment(data);
  };
  //get appointment..
  useEffect(() => {
    fetch("https://api.homegrowbd.com/api/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data.data);
        setLoader(false);
      });
  }, []);

  //Delete Appointment
  const handaleDeleteAppointment = (oneAppointment) => {
    const aggre = window.confirm(
      `You want to delete, ${oneAppointment.first_name}. appointment for ${oneAppointment.service_title} ?`
    );
    if (aggre) {
      fetch(
        `https://api.homegrowbd.com/api/appointment/delete/${oneAppointment.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status === true) {
            const newQueryData = appointments.filter(
              (appoint) => appoint.id !== oneAppointment.id
            );
            alert(data.msg);
            setAppointments(newQueryData);
          }
        });
    }
  };

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(15);

  // Calculate total number of pages
  const totalPages = Math.ceil(appointments.length / perPage);

  // Calculate index of the first and last appointment on the current page
  const indexOfLastAppointment = currentPage * perPage;
  const indexOfFirstAppointment = indexOfLastAppointment - perPage;

  // Slice the appointments array to get appointments for the current page
  const currentAppointments = appointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination buttons
  const renderPaginationButtons = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="flex justify-center gap-2 !mt-5">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === number ? "bg-blue-500 text-white" : ""
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };
  return (
    <div className="!mt-5 md:!mt-0 md:!p-5 lg:!p-10">
      <p className="text-xl font-semibold text-blue">
        Total appointments : {appointments.length}
      </p>
      <div className="!mt-5">
        {loader ? (
          <LoaderPage />
        ) : (
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border border-blue-500 bg-blue-500 text-white !p-4"
                  >
                    <p
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentAppointments?.map((appointment, i) => (
                <tr key={i} className="bg-gray-100">
                  <td className="!p-4">
                    <p
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {appointment?.service_title}
                    </p>
                  </td>
                  <td className="!p-4">
                    <p
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {`${appointment?.first_name} ${appointment?.last_name}`}
                    </p>
                  </td>
                  <td className="!p-4">
                    <p
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {appointment?.phone}
                    </p>
                  </td>
                  <td className="!p-4">
                    <p
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {appointment?.email}
                    </p>
                  </td>
                  <td className="!p-4 flex">
                    <button
                      onClick={() => handleOpen(appointment)}
                      className="px-2 py-1 shadow-md rounded-full border border-primary text-primary flex items-center gap-2"
                    >
                      <MdDelete
                        onClick={() => handaleDeleteAppointment(appointment)}
                        className="text-3xl text-red-500 cursor-pointer"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Appointment;
