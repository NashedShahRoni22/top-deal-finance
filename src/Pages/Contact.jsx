import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

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
        "https://api.topdealfinance.com.au/api/contact/store",
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
    <section className="!py-10 md:!py-20 min-h-[80vh] flex justify-center items-center">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 flex-1">
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
                className="!px-4 !py-2 border rounded focus:outline-none"
                required
              />
              <input
                color="indigo"
                size="lg"
                placeholder="Email"
                name="email"
                className="!px-4 !py-2 border rounded focus:outline-none"
                required
              />
              <input
                color="indigo"
                size="lg"
                placeholder="Phone"
                name="phone"
                className="!px-4 !py-2 border rounded focus:outline-none"
                required
              />
              <input
                color="indigo"
                size="lg"
                placeholder="Address"
                name="address"
                className="!px-4 !py-2 border rounded focus:outline-none"
                required
              />
              <textarea
                color="indigo"
                rows={6}
                placeholder="Your Message"
                name="message"
                className="!px-4 !py-2 border rounded focus:outline-none"
                required
              />
              <button
                type="submit"
                className="!px-6 !py-2.5 text-xs md:text-base w-fit bg-[#CEB666] text-white rounded flex gap-2 justify-center items-center cursor-pointer"
              >
                Send Message
                {loader && <FaSpinner className="h-4 w-4 animate-spin" />}
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.283025754645!2d151.16386247643464!3d-33.727496811755216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a83daae0d10b%3A0xe3751e7366a4626!2sUnit%20103%2F126A%20Killeaton%20St%2C%20St.%20Ives%20NSW%202075%2C%20Australia!5e0!3m2!1sen!2sbd!4v1741844989583!5m2!1sen!2sbd"
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
