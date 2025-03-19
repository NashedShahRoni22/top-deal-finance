import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoaderPage from "../../Components/Shared/LoaderPage";
import { Helmet } from "react-helmet";
import "../preview.css";

export default function BlogDetails() {
  const { url } = useParams();
  const [service, setService] = useState({});
  const [loader, setLoader] = useState(false);

  //get service
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.topdealfinance.com.au/api/blogs/${url}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setService(data.data);
          setLoader(false);
        }
      });
  }, []);
  return (
    <>
      {loader ? (
        <LoaderPage />
      ) : (
        <section className="lg:w-3/4 lg:!mx-auto !pt-5 !py-10 md:!pt-10 md:!py-20 flex flex-col gap-2.5 md:gap-5">
          <Helmet>
            <title>{service?.meta_title}</title>
            <meta name="description" content={service?.meta_description} />
          </Helmet>
          <div className="flex flex-col gap-2.5 md:gap-5">
            <div className="flex justify-center">
              <img
                src={service?.thumbnail}
                alt=""
                className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-fill"
                loading="lazy"
              />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#CEB666]">
              {service?.title}
            </h1>
            <p className="text-xl md:text-2xl">{service?.slogan}</p>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: service?.content }}
            />
          </div>
          <section className="text-center !py-5 md:!py-10 bg-gray-500 text-white rounded">
            <h2 className="text-3xl font-semibold !mb-4">Contact Us Today!</h2>
            <p className="text-lg !mb-6">
              Ready to secure your loan? Contact us now to speak with a loan
              specialist who can help you get started.
            </p>
            <Link
              to="/contact"
              className="inline-block !px-6 !py-2.5 bg-[#CEB666] text-white text-lg font-semibold rounded-lg hover:bg-gray-500 transition duration-300"
            >
              Get Started
            </Link>
          </section>
        </section>
      )}
    </>
  );
}
