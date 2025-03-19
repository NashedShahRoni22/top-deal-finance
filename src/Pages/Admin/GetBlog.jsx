import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import LoaderPage from "../../Components/Shared/LoaderPage";

export default function GetBlog() {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  //get services
  useEffect(() => {
    setLoading(true);
    fetch("https://api.topdealfinance.com.au/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
          setLoading(false);
        }
      });
  }, []);
  // delete service
  const deleteService = async (id) => {
    try {
      const response = await fetch(
        `https://api.topdealfinance.com.au/api/blog/delete/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (data.status === true) {
        const updatedServices = services.filter((s) => s.id !== id);
        setServices(updatedServices);
        window.alert("Blog deleted successfully!");
      }

      // Handle response data as needed
    } catch (error) {
      console.error("Error:", error);
      setLoader(false);
    }
  };
  return (
    <section className="!mt-5 md:!mt-0 md:!p-5 lg:!p-10">
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <h5 className="text-primary font-semibold text-xl">Total Blogs: {services.length}</h5>
          <div className="!mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services?.map((s, i) => (
              <div
                key={i}
                className="text-primary shadow hover:shadow-primary duration-300 ease-linear flex flex-col justify-between"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={s?.thumbnail}
                    alt=""
                    className="h-[200px] w-full group-hover:scale-110 group-hover:rotate-3 duration-300 ease-linear rounded"
                    loading="lazy"
                  />
                  <div className="absolute top-0 h-full w-full bg-black/60 hidden group-hover:flex justify-center items-center duration-300 ease-linear rounded">
                    <BsEyeFill className="text-3xl text-white" />
                  </div>
                </div>
                <div className="!p-4">
                  <p className="text-xl font-semibold text-primary !mt-3">
                    {s?.title}
                  </p>
                  <p
                    className="!mt-2.5 text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: s?.content?.slice(0, 300),
                    }}
                  />
                  <div className="flex gap-2 !mt-5">
                    <Link
                      to={`/admin/update_blog/${s?.slug}/${s?.id}`}
                      className="bg-blue-500 w-1/2 text-center text-white !py-2 shadow rounded"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteService(s?.id)}
                      className="bg-red-400 w-1/2 text-center text-white !py-2 shadow rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
