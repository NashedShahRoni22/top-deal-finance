import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderPage from "../../Components/Shared/LoaderPage";
import { Helmet } from "react-helmet";
import "../preview.css";
import Testimonial from "../../Components/Home/Testimonial";
import Faq from "../../Components/Home/Faq";

export default function ServiceDetails() {
  const { url } = useParams();
  const [service, setService] = useState({});
  const [loader, setLoader] = useState(false);

  //get service
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.homegrowbd.com/api/services/${url}`)
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

            <h1 className="text-xl md:text-3xl text-orange-800 font-bold">
              {service?.slogan}
            </h1>
            <p className="md:text-xl font-semibold text-primary">
              {service?.title}
            </p>
            <div id="preview" dangerouslySetInnerHTML={{ __html: service?.content }} />
          </div>
          <Testimonial/>
          <Faq/>
        </section>
      )}
    </>
  );
}
