// import { Input, Spinner } from "@material-tailwind/react";
// import { Textarea } from "@material-tailwind/react";
// import yellowLine from "../assets/lines/yellow_line.png";
import { useState } from "react";

export default function Contact() {
  const [loader, setLoader] = useState(false);
  const handleContact = async (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;
    const postData = {
      name,
      email,
      phone,
      address,
      message,
    };
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("message", message);
    try {
      const response = await fetch(
        "https://api.smartmovefinancial.com.au/api/contact/store",
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
        form.reset();
        setLoader(false);
      }
    } catch (error) {
      console.log("Error:", error);
      setLoader(false);
    }
  };

  return (
    <section className="mx-5 md:container md:mx-auto !py-10 md:!py-20 min-h-[80vh] flex justify-center items-center">
      <div className="lg:flex gap-16 flex-1">
        <div className="lg:w-1/2">
          <div className="">
            <p className="text-primary  text-xl md:text-3xl font-semibold">
              Leave a message
            </p>
            {/* <img src={yellowLine} alt="" /> */}
            <form
              onSubmit={handleContact}
              className="!mt-5 flex flex-col gap-2.5"
            >
              <input
                color="indigo"
                size="lg"
                placeholder="Name"
                name="name"
                className="!px-4 !py-2 border rounded"
                required
              />
              <input
                color="indigo"
                size="lg"
                placeholder="Email"
                name="email"
                className="!px-4 !py-2 border rounded"
                required
              />
              <input
                color="indigo"
                size="lg"
                placeholder="Phone"
                name="phone"
                className="!px-4 !py-2 border rounded"
                required
              />
              <input
                color="indigo"
                size="lg"
                placeholder="Address"
                name="address"
                className="!px-4 !py-2 border rounded"
                required
              />
              <textarea
                color="indigo"
                rows={6}
                placeholder="Your Message"
                name="message"
                className="!px-4 !py-2 border rounded"
                required
              />
              <button
                type="submit"
                className="!px-2 md:!px-4 !py-2 text-xs md:text-base w-fit bg-[#110D0C] text-white rounded flex gap-2 justify-center items-center"
              >
                Send Message
                {/* {loader && <Spinner className="h-4 w-4" />} */}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-0 lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.322001161111!2d150.7243760765596!3d-34.00994472638486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f22a0145b4a1%3A0x10c0b6028f43e87!2s57%20Radisich%20Lp%2C%20Oran%20Park%20NSW%202570%2C%20Australia!5e0!3m2!1sen!2sbd!4v1711877984825!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
