import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block xl:block bg-white border-b">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
        <div className="inline-flex">
          <div className="relative" data-headlessui-state="">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <nav className="md:flex space-x-10 items-center">
                  <div className="relative font-serif" data-headlessui-state="">
                    <button
                      className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                      id="headlessui-popover-button-:r2:"
                    >
                      <span className="font-serif text-sm font-medium">
                        Categories
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <div
                      style={{ display: "none" }}
                      className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white opacity-100 translate-y-0"
                      id="headlessui-popover-panel-:r4:"
                      tabIndex="-1"
                      data-headlessui-state="open"
                    >
                      <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                        <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
                          <div className="w-full max-h-full">
                            <div className="relative grid gap-2 p-6">
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fcarp-fish_paxzrt.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fcarp-fish_paxzrt.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fcarp-fish_paxzrt.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Fish &amp; Meat
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400" />
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="48"
                                      d="M184 112l144 144-144 144"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340704%2Fcategory%2520icon%2Fcabbage_n59uv3.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340704%2Fcategory%2520icon%2Fcabbage_n59uv3.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340704%2Fcategory%2520icon%2Fcabbage_n59uv3.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Fruits &amp; Vegetable
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340704%2Fcategory%2520icon%2Ffrying-pan_vglm5c.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340704%2Fcategory%2520icon%2Ffrying-pan_vglm5c.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340704%2Fcategory%2520icon%2Ffrying-pan_vglm5c.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Cooking Essentials
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400" />
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="48"
                                      d="M184 112l144 144-144 144"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fcookie_1_ugipqa.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fcookie_1_ugipqa.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fcookie_1_ugipqa.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Biscuits &amp; Cakes
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fspray_pebsjt.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fspray_pebsjt.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fspray_pebsjt.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Household Tools
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340707%2Fcategory%2520icon%2Fcat_tznwmq.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340707%2Fcategory%2520icon%2Fcat_tznwmq.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340707%2Fcategory%2520icon%2Fcat_tznwmq.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Pet Care
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fbeauty_vfbmzc.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fbeauty_vfbmzc.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fbeauty_vfbmzc.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Beauty &amp; Healths
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Jam &amp; Jelly
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fmilk_dcl0dr.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fmilk_dcl0dr.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340706%2Fcategory%2520icon%2Fmilk_dcl0dr.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Milk &amp; Dairy
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fjuice_p5gv5k.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fjuice_p5gv5k.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fjuice_p5gv5k.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Drinks
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <img
                                  alt="Category"
                                  loading="lazy"
                                  width="18"
                                  height="18"
                                  decoding="async"
                                  data-nimg="1"
                                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fbagel_mt3fod.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fbagel_mt3fod.png&amp;w=48&amp;q=75 2x"
                                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1658340705%2Fcategory%2520icon%2Fbagel_mt3fod.png&amp;w=48&amp;q=75"
                                  style={{ color: "transparent" }}
                                />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Breakfast
                                  <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M184 112l144 144-144 144"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: "0px",
                        padding: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        "whiteSpace": "nowrap",
                        "borderWidth": "0px",
                        display: "none",
                      }}
                    ></div>
                  </div>
                  <a
                    className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                    href="#"
                  >
                    About Us
                  </a>
                  <a
                    className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                    href="#"
                  >
                    Contact Us
                  </a>
                  <div className="relative font-serif" data-headlessui-state="">
                    <button
                      className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                      id="headlessui-popover-button-:r0:"
                    >
                      <span>Pages</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <a
                    className="relative inline-flex items-center  bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                    href="#"
                  >
                    Offers
                    <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </div>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
