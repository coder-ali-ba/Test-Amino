import React from "react";
import heroImage from "../assets/hero.avif";

function Hero() {
  return (
    <div
      className="w-full py-12 bg-cover bg-center mt-6 rounded-2xl flex flex-wrap"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white flex flex-col justify-around gap-6  w-full lg:w-1/2 p-4">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Thank you for Visiting Modern Aminos
        </h2>
        <p className="max-md:text-sm">
          At Modern Aminos, we are committed to maintaining a highly compliant
          and researcher-friendly experience. To support this commitment, we now
          require researchers to log in to their user account in order to view
          our full selection of research materials. If you do not have an
          existing account with us please register below.
        </p>
        <p className="max-md:text-sm">
          Please be advised: All compounds and research materials provided by
          Modern Aminos are strictly for laboratory and research use only. They
          are not approved for human consumption by the Food and Drug
          Administration (FDA). These products should not be used for any form
          of in vivo experimentation or for any other non-laboratory purpose. By
          purchasing these products, you acknowledge that they will be used
          exclusively within a controlled and qualified research environment
        </p>
        <button className="px-7 py-2 w-fit rounded-md hover:bg-white hover:text-blue-500 border-2 border-white">
          Register Now
        </button>
      </div>
      <div className="w-full lg:w-1/2  p-4 ">
        <div className="w-full h-full pb-6 rounded-2xl border-2 border-white">
          <div className="w-full h-screen  flex rounded-2xl items-center justify-start">

            <div className="relative z-10 w-full mx-2 md:mx-10 text-white">
              <h1 className="text-3xl font-bold mb-6">Login</h1>

              <label className="block mb-2">Username or email address *</label>
              <input
                type="text"
                className="w-full mb-5 px-4 py-3 bg-transparent border border-white/50 rounded outline-none focus:border-white"
              />

              <label className="block mb-2">Password *</label>
              <input
                type="password"
                className="w-full mb-4 px-4 py-3 bg-transparent border border-white/50 rounded outline-none focus:border-white"
              />

              <div className="flex items-center gap-2 mb-6">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full mb-4">
                Log In
              </button>

              <p className="text-sm mb-6">
                Lost your password?{" "}
                <span className="underline cursor-pointer">Register</span>
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded mb-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <button className="w-full flex items-center justify-center gap-2 bg-[#2b2b2b] py-2 rounded">
                <img
                  src="https://img.icons8.com/color/48/microsoft.png"
                  alt="microsoft"
                  className="w-5 h-5"
                />
                Continue with Microsoft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
