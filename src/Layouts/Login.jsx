import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const loginEmail = "admin@smartmovefinancial.com.au";
  const loginPassword = "@smartmove2024";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email === loginEmail && password === loginPassword) {
      localStorage.setItem("smfAccessToken", "@smartmove2024")
      navigate("/admin");
    } else {
      window.alert("Enter valid email & password");
    }
  };
  return (
    <section className="min-h-screen flex justify-center items-center bg-blue-200">
      <form
        onSubmit={handleLogin}
        className="w-3/4 md:w-1/2 lg:w-1/3 !p-5 md:!p-10 shadow rounded bg-white flex flex-col gap-2.5 md:gap-5"
      >
        <h5 className="font-semibold text-xl md:text-3xl">Login</h5>
        <input className="!px-4 !py-2 border border-blue-500 rounded focus:outline-none" type="email" name="email" placeholder="Enter Email" />
        <input className="!px-4 !py-2 border border-blue-500 rounded focus:outline-none" type="password" name="password" placeholder="Enter Password" />
        <button className="!px-4 !py-2 border border-blue-500 bg-blue-500 text-white rounded font-semibold" type="submit">Login</button>
      </form>
    </section>
  );
}
