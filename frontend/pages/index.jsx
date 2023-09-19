import React, { useEffect } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Image from "next/image";
import Layout from "components/Layout";

export default function Index() {
  return (
    <Layout title="Home / Cowsense">
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                CowSense - Smart Lumpy Detection
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              CowSense is a one-stop-shop for dairy farmers, offering disease detection, on-demand clinics.
              By using CowSense, farmers can enhance cow health and productivity.
              </p>
              <div className="mt-12">
                <Link href="/disease">
                  <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-800 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Get started
                  </a>
                </Link>

                {/* <a
                  href="https://github.com/sarvesh2902/Hackanova_CTRL-ALT-ELITE"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-7 b-auto right-0 pt-12 sm:w-6/12 -mt-16 sm:mt-0 w-100 max-h-860-px"
          src="/img/home-img.png"
          alt="..."
        />
      </section>

      <section
        id="main"
        className="mt-48 md:mt-40 pb-4 relative bg-blueGray-100"
      >
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>


        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mb-20 ">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Disease Detection
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Helps dairy farmers monitor cow health, detect diseases early, and prevent outbreaks, improving herd management, productivity, and milk quality.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Early Detection
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Prevent outbreaks
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Improved Crop Yields
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  improving herd management
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Accurate Identification
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Improve Productivity
                </span>
              </div>
              <Link href="/disease">
                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                  View
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>

            <div className="w-96 md:w-5/12 px-4 mr-auto ml-auto mt-40">
              <img class="rounded-2xl"
                src="https://thumbs.dreamstime.com/b/lumpy-skin-disease-india-cow-skin-disease-virus-spreading-east-asia-cows-lumpy-lampi-disease-symptoms-skin-257447929.jpg"
                width={1000}
                height={1000}
              />
            </div>
          </div>


        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">Let&apos;s get started</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Smart Agriculture - Cultivate efficiently with us!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/disease">
                  <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-800 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Get started
                  </a>
                </Link>

                {/* <a
                  href="https://github.com/sarvesh2902/Hackanova_CTRL-ALT-ELITE"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a> */}
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
