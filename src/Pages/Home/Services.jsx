import { useEffect, useState } from "react";
import yellowLine from "../assets/lines/yellow_line.png";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import LoaderPage from "../../Components/Shared/LoaderPage";
const Services = () => {
  const [loading, setLoading] = useState(false);
  const [showNum, setShowNum] = useState(8);
  const [services, setServices] = useState([]);

  //get services
  useEffect(() => {
    setLoading(true);
    fetch("https://api.homegrowbd.com/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
          setLoading(false);
        }
      });
  }, []);

  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-primary text-3xl lg:text-6xl font-semibold">
          Our Services
        </h1>
        <img src={yellowLine} alt="" className="" />
      </div>
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.slice(0, showNum).map((loan, i) => (
              <Link
                key={i}
                to={`/service/${loan?.url}`}
                className="rounded shadow-xl group"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={loan?.thumbnail}
                    alt=""
                    className="h-[200px] w-full group-hover:scale-110 group-hover:rotate-3 duration-300 ease-linear rounded"
                    loading="lazy"
                  />
                  <div className="absolute top-0 h-full w-full bg-black/60 hidden group-hover:flex justify-center items-center duration-300 ease-linear rounded">
                    <BsEyeFill className="text-3xl text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xl font-semibold text-primary mt-3">
                    {loan?.title}
                  </p>
                  <div
                    className="my-2.5 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: loan?.content?.slice(0, 350),
                    }}
                  />
                  <div className="p-2 border w-fit rounded-full bg-primary text-white group-hover:scale-110 duration-300 ease-linear">
                    <MdArrowOutward className="text-xl group-hover:rotate-45 duration-300 ease-linear" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {services?.length > 8 && (
            <div className="flex justify-center mt-10 md:mt-20">
              {showNum === 8 ? (
                <button
                  onClick={() => setShowNum(services.length)}
                  className="px-4 py-2 border border-primary rounded-full"
                >
                  Explore More
                </button>
              ) : (
                <button
                  onClick={() => setShowNum(8)}
                  className="px-4 py-2 border border-primary rounded-full"
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Services;
