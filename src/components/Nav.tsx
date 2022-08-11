import { useState } from "react";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isFeaturesSelected, setIsFeaturesSelected] = useState<boolean>(false);
  const [isCompanySelected, setIsCompanySelected] = useState<boolean>(false);
  return (
    <div className="relative">
      {/* Mobile Nav */}
      <nav className="flex justify-between items-center py-4 px-2  md:hidden">
        <img alt="snap logo" src="/Logo.svg" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer transition-all ease-in-out duration-500 "
        >
          <img alt="hamburger menu" src="/MenuIcon.svg" />
        </button>
      </nav>

      {isMenuOpen && (
        <>
          <div className="absolute top-0 w-screen h-screen bg-black z-10 opacity-60"></div>
          <div className=" absolute top-0 w-screen h-screen z-20">
            <nav className="w-2/3 bg-white h-full ml-auto shadow-2xl px-4 py-4 transition-all ease-in-out duration-500 ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-auto block"
              >
                <img
                  src="/CloseMenuIcon.svg"
                  alt="close menu"
                  className=" cursor-pointer"
                />
              </button>
              <div className="my-8" />
              <ul className="space-y-4 cursor-pointer">
                <li>
                  Features{" "}
                  <button
                    onClick={() => setIsFeaturesSelected(!isFeaturesSelected)}
                  >
                    {isFeaturesSelected ? (
                      <img src="/ArraowUpIcon.svg" />
                    ) : (
                      <img src="/ArrowDownIcon.svg" />
                    )}
                  </button>
                  {isFeaturesSelected && (
                    <ul className="space-y-2 pl-8 mt-3 cursor-pointer">
                      <li className="flex items-center gap-2">
                        <img src="/TodoIcon.svg" alt="to-do list icon" /> Todo
                        List
                      </li>
                      <li className="flex items-center gap-2">
                        <img src="/CalendarIcon.svg" alt="calendar icon" />{" "}
                        Calendar
                      </li>
                      <li className="flex items-center gap-2">
                        <img src="/RemindersIcon.svg" alt="reminders icon" />{" "}
                        Reminders
                      </li>
                      <li className="flex items-center gap-2">
                        <img src="/PlanningIcon.svg" alt="planning icon" />{" "}
                        Planning
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  Company{" "}
                  <button
                    onClick={() => setIsCompanySelected(!isCompanySelected)}
                  >
                    {isCompanySelected ? (
                      <img src="/ArraowUpIcon.svg" />
                    ) : (
                      <img src="/ArrowDownIcon.svg" />
                    )}
                  </button>
                  {isCompanySelected && (
                    <ul className="space-y-2 pl-8 mt-3 cursor-pointer">
                      <li>History</li>
                      <li>Our Team</li>
                      <li>Blog</li>
                    </ul>
                  )}
                </li>
                <li>Careers </li>
                <li>About </li>
              </ul>
              <div className="my-8" />
              <div className="flex flex-col space-y-3">
                <button className="py-2">Login</button>
                <button className="rounded-lg py-2 border-gray-500 border-2">
                  Register
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
      {/* Nav Desktop */}
      <div className="md:block py-4 px-6 hidden">
        <nav className=" flex justify-between items-center">
          <div className="flex gap-16">
            <img alt="snap logo" src="/Logo.svg" />
            <ul className="flex gap-6 cursor-pointer">
              <li
                className="relative group flex items-center gap-2"
                onClick={() => setIsFeaturesSelected(!isFeaturesSelected)}
              >
                Features
                <img
                  src="/ArrowDownIcon.svg"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "/ArraowUpIcon.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "/ArrowDownIcon.svg")
                  }
                />
                <ul className="absolute p-4 bg-white shadow-lg w-40 rounded-lg hidden group-hover:block -inset-x-20 space-y-2 top-7">
                  <li className="flex items-center gap-2">
                    <img src="/TodoIcon.svg" alt="to-do list icon" /> Todo List
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/CalendarIcon.svg" alt="calendar icon" /> Calendar
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/RemindersIcon.svg" alt="reminders icon" />{" "}
                    Reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/PlanningIcon.svg" alt="planning icon" /> Planning
                  </li>
                </ul>
              </li>
              <li
                className="relative group flex items-center gap-2"
                onClick={() => setIsCompanySelected(!isCompanySelected)}
              >
                Company{" "}
                {isCompanySelected ? (
                  <img src="/ArraowUpIcon.svg" />
                ) : (
                  <img src="/ArrowDownIcon.svg" />
                )}
                <ul className="absolute p-4 bg-white shadow-lg w-30 rounded-lg hidden group-hover:block -right-4 space-y-2 top-7">
                  <li className="flex items-center gap-2">History</li>
                  <li className="flex items-center gap-2">Our Team</li>
                  <li className="flex items-center gap-2">Blog</li>
                </ul>
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex gap-6">
            <button className="py-2 px-4">Login</button>
            <button className="rounded-lg py-2 px-4 border-gray-500 border-2">
              Register
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
