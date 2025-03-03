import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl font-semibold uppercase">This Page is under <span className="text-red-500">maintainance</span> </p>
      <p className="text-3xl font-semibold uppercase">We will be live soon!</p>
    </div>
  );
}
