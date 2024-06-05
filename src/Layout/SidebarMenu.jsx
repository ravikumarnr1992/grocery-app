import { useState } from "react";
import useDropdownMenu from "../hooks/useDropdownMenu";

const SidebarMenu = () => {
  const { toggle, toggleMenu } = useDropdownMenu();

  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-3 px-4 py-4 lg:mt-3 lg:px-5">
        <div>
          <h3 className="mb-4 ml-4 text-sm font-medium text-white">MENU</h3>
          <ul className="mb-6 flex flex-col gap-1">
            <li onClick={() => toggleMenu("dashboard")}>
              <a className="group relative cursor-pointer flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4 bg-gray-600 dark:bg-meta-4">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.10322 0.956299H23135C1751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1751 8.01567 23135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6813 6.38447 6.8063 6.10322 6.8063H23135C2.2501 6.8063 2.0251 6813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 23135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                    fill=""
                  ></path>
                  <path
                    d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                    fill=""
                  ></path>
                  <path
                    d="M6.10322 9.92822H23135C1751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1751 16.9876 23135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15532 6.38447 15.7782 6.10322 15.7782H23135C2.2501 15.7782 2.0251 15532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 23135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                    fill=""
                  ></path>
                  <path
                    d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                    fill=""
                  ></path>
                </svg>
                Dashboard
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                  ></path>
                </svg>
              </a>
              {toggle.dashboard && (
                <div className="translate transform overflow-hidden block">
                  <ul className="mb-5 mt-4 flex flex-col gap-2 pl-6">
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Analytics
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="marketing.html"
                      >
                        Marketing
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        CRM
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Stocks
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17218 1525 17218 14406V4.72495C17218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14125ZM15.7499 15.0187H13.8374V12.2625H16.228V14406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                    fill=""
                  ></path>
                </svg>
                Calendar
              </a>
            </li>
            <li>
              <a
                className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11033 2.84065 11033 4.16252C11033 5.4844 10.3783 65315 9.0002 65315C7.62207 65315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                    fill=""
                  ></path>
                  <path
                    d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11313 1.71582 14406V16.875C1.71582 17.2125 1.99707 17219 2.3627 17219C2.72832 17219 3.00957 17.2407 3.00957 16.875V14406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14406V16.875C15.0752 17.2125 15.3564 17219 15.7221 17219C16.0877 17219 16.3689 17.2407 16.3689 16.875V14406C16.2846 11313 13.8377 9.05627 10.8283 9.05627Z"
                    fill=""
                  ></path>
                </svg>
                Profile
              </a>
            </li>
            <li onClick={() => toggleMenu("task")}>
              <a
                className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_130_9728)">
                    <path
                      d="M3.45928 0.984375H1.6874C1.04053 0.984375 0.478027 11875 0.478027 2.19375V3.96563C0.478027 4.6125 1.0124 5.175 1.6874 5.175H3.45928C4.10615 5.175 4.66865 4.64063 4.66865 3.96563V2.16562C4.64053 11875 4.10615 0.984375 3.45928 0.984375ZM3.3749 3.88125H1.77178V2.25H3.3749V3.88125Z"
                      fill=""
                    ></path>
                    <path
                      d="M7.22793 3.71245H16.8748C17.2123 3.71245 17217 3.4312 17217 3.06558C17217 2.69995 17.2404 2.4187 16.8748 2.4187H7.22793C6.89043 2.4187 68105 2.69995 68105 3.06558C68105 3.4312 6.89043 3.71245 7.22793 3.71245Z"
                      fill=""
                    ></path>
                    <path
                      d="M3.45928 6.75H1.6874C1.04053 6.75 0.478027 7.28437 0.478027 7.95937V9.73125C0.478027 10.3781 1.0124 10.9406 1.6874 10.9406H3.45928C4.10615 10.9406 4.66865 10.4062 4.66865 9.73125V7.95937C4.64053 7.28437 4.10615 6.75 3.45928 6.75ZM3.3749 9.64687H1.77178V8.01562H3.3749V9.64687Z"
                      fill=""
                    ></path>
                    <path
                      d="M16.8748 8.21252H7.22793C6.89043 8.21252 68105 8.49377 68105 8.8594C68105 9.22502 6.86231 9.47815 7.22793 9.47815H16.8748C17.2123 9.47815 17217 9.1969 17217 8.8594C17217 8219 17.2123 8.21252 16.8748 8.21252Z"
                      fill=""
                    ></path>
                    <path
                      d="M3.45928 12.8531H1.6874C1.04053 12.8531 0.478027 13.3875 0.478027 14.0625V15.8344C0.478027 16.4813 1.0124 17.0438 1.6874 17.0438H3.45928C4.10615 17.0438 4.66865 16094 4.66865 15.8344V14.0625C4.64053 13.3875 4.10615 12.8531 3.45928 12.8531ZM3.3749 15.75H1.77178V14.1188H3.3749V15.75Z"
                      fill=""
                    ></path>
                    <path
                      d="M16.8748 14.2875H7.22793C6.89043 14.2875 68105 14687 68105 14.9344C68105 15.3 6.86231 15812 7.22793 15812H16.8748C17.2123 15812 17217 15.3 17217 14.9344C17217 14687 17.2123 14.2875 16.8748 14.2875Z"
                      fill=""
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_130_9728">
                      <rect width="18" height="18" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Task
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                  ></path>
                </svg>
              </a>

              {toggle.task && (
                <div className="translate transform overflow-hidden">
                  <ul className="mb-5 mt-4 flex flex-col gap-2 pl-6">
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        List
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Kanban
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={() => toggleMenu("forms")}>
              <a
                className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.43425 7093H2.278C2.44675 7093 25925 7.3968 28737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7093 68112 7093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 39987 1.29368 37175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7093 1.43425 7093ZM4.47175 2.98118L5.3155 5.17493H39987L4.47175 2.98118Z"
                    fill=""
                  ></path>
                  <path
                    d="M10.1249 2031H16.8749C17.2124 2031 17218 2.22185 17218 1.85623C17218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2031 10.1249 2031Z"
                    fill=""
                  ></path>
                  <path
                    d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 70933 10.1249 70933H16.8749C17.2124 70933 17218 7.22808 17218 6.86245C17218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
                    fill=""
                  ></path>
                  <path
                    d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17219 12.1781 17219 11.8125C17219 11.4469 17.2125 11.1656 16.875 11.1656Z"
                    fill=""
                  ></path>
                  <path
                    d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17219 17.1281 17219 16.7625C17219 16.3969 17.2125 16.1156 16.875 16.1156Z"
                    fill="white"
                  ></path>
                </svg>
                Forms
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                  ></path>
                </svg>
              </a>
              {toggle.forms && (
                <div className="translate transform overflow-hidden">
                  <ul className="mb-5 mt-4 flex flex-col gap-2 pl-6">
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Form Elements
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Pro Form Elements
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Form Layout
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Pro Form Layout
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={() => toggleMenu("tables")}>
              <a
                className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_130_9756)">
                    <path
                      d="M15.7501 05835H2.2501C1.29385 05835 006348 1.34585 006348 2.3021V15.8021C006348 16.7584 1.29385 1774 2.27822 1774H15.7782C16.7345 1774 17501 16.7865 17501 15.8021V2.3021C1722 1.34585 16.7063 05835 15.7501 05835ZM6.69385 1099V6.4646H11.3063V10709H6.69385V1099ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10709H1.77197V6.4646ZM1272 6.4646H16.2563V10709H1272V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H1272V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
                      fill=""
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_130_9756">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.052124)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                Tables
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                  ></path>
                </svg>
              </a>
              {toggle.tables && (
                <div className="translate transform overflow-hidden">
                  <ul className="mb-5 mt-4 flex flex-col gap-2 pl-6">
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Tables
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Pro Tables
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={() => toggleMenu("pages")}>
              <a
                className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-meta-4"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2875 006226H3.7125C2.75625 006226 1.96875 1.29373 1.96875 2.24998V15.75C1.96875 16.7062 2.75625 17219 3.74063 17219H14.3156C15.2719 17219 16.0875 16.7344 16.0875 15.75V2.24998C16.0313 1.29373 15.2438 006226 14.2875 006226ZM14.7656 15.75C14.7656 16.0312 14406 16.2562 14.2594 16.2562H3.7125C3.43125 16.2562 3.20625 16.0312 3.20625 15.75V2.24998C3.20625 1.96873 3.43125 1.74373 3.7125 1.74373H14.2875C14688 1.74373 14.7938 1.96873 14.7938 2.24998V15.75H14.7656Z"
                    fill=""
                  ></path>
                  <path
                    d="M12.7965 2.6156H9.73086C9.22461 2.6156 8.80273 3.03748 8.80273 34373V7.25623C8.80273 7.76248 9.22461 8.18435 9.73086 8.18435H12.7965C13.3027 8.18435 13.7246 7.76248 13.7246 7.25623V3156C13.6965 3.03748 13.3027 2.6156 12.7965 2.6156ZM12.4309 6.8906H10.0684V3.88123H12.4309V6.8906Z"
                    fill=""
                  ></path>
                  <path
                    d="M4.97773 4.35938H7.03086C7.36836 4.35938 7.67773 4.07812 7.67773 3.7125C7.67773 3.34687 7.39648 3.09375 7.03086 3.09375H4.94961C4.61211 3.09375 4.30273 3.375 4.30273 3.74063C4.30273 4.10625 4.61211 4.35938 4.97773 4.35938Z"
                    fill=""
                  ></path>
                  <path
                    d="M4.97773 7.9312H7.03086C7.36836 7.9312 7.67773 7.64995 7.67773 7.28433C7.67773 6.9187 7.39648 6.63745 7.03086 6.63745H4.94961C4.61211 6.63745 4.30273 6.9187 4.30273 7.28433C4.30273 7.64995 4.61211 7.9312 4.97773 7.9312Z"
                    fill=""
                  ></path>
                  <path
                    d="M13.0789 10.2374H4.97891C4.64141 10.2374 4.33203 10187 4.33203 10.8843C4.33203 11.2499 4.61328 11312 4.97891 11312H13.0789C13.4164 11312 13.7258 11.2499 13.7258 10.8843C13.7258 10187 13.4164 10.2374 13.0789 10.2374Z"
                    fill=""
                  ></path>
                  <path
                    d="M13.0789 13.8093H4.97891C4.64141 13.8093 4.33203 14.0906 4.33203 14.4562C4.33203 14.8218 4.61328 15.1031 4.97891 15.1031H13.0789C13.4164 15.1031 13.7258 14.8218 13.7258 14.4562C13.7258 14.0906 13.4164 13.8093 13.0789 13.8093Z"
                    fill=""
                  ></path>
                </svg>
                Pages
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                  ></path>
                </svg>
              </a>
              {toggle.pages && (
                <div className="translate transform overflow-hidden">
                  <ul className="mb-5 mt-4 flex flex-col gap-2 pl-6">
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="settings.html"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        File Manager
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Data Tables
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Pricing Tables
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Error Page
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Faq's
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Teams
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Terms &amp; Conditions
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group relative flex items-center gap-2 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white"
                        href="#"
                      >
                        Mail Success
                        <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                          Pro
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;
