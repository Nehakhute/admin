import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./sidebar.css";
const routes = [
  {
    path: "/",
    name: "Performance Overview",
    icon: <FaHome />,
  },
  {
    path: "/account",
    name: "Account overview",
    icon: <FaUser />,
  },
  {
    path: "/leads",
    name: "Leads",
    icon: <MdMessage />,
    subRoutes: [
      {
        path: "/leads/referral",
        name: "My Referral ",
        icon: <FaUser />,
      },
      {
        path: "/leads/myclientsreferral",
        name: "My clients referral",
        icon: <FaLock />,
      },
      {
        path: "/leads/mypartner",
        name: "My partner",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/incentiveoffer",
    name: "Incentive details",
    icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "/incentiveoffer/incentivedetails",
        name: "Incentive Details ",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/resourcepolicy",
    name: "Resource & polices",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/resourcepolicy/digilink",
        name: "Digi link policy ",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/myaccount",
    name: "My Account",
    icon: <BsCartCheck />,
    subRoutes: [
      {
        path: "/myaccount/profile",
        name: "Profile",
        icon: <FaUser />,
      },
      {
        path: "/myaccount/changepassword",
        name: "Change password",
        icon: <FaUser />,
      },
      {
        path: "/myaccount/modification",
        name: "Modification",
        icon: <FaUser />,
      },
      {
        path: "/myaccount/referpartner",
        name: "Refer a partner",
        icon: <FaUser />,
      },
      {
        path: "/myaccount/tdscertificate",
        name: "TDS certificate",
        icon: <FaUser />,
      },
      {
        path: "/myaccount/gst",
        name: "GST",
        icon: <FaUser />,
      },
      {
        path: "/myaccount/leger",
        name: "Leger",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/reports/clients",
        name: "Clients ",
        icon: <FaUser />,
      },
      {
        path: "/reports/clienttraderlist",
        name: "Client traded list",
        icon: <FaLock />,
      },
      {
        path: "/reports/mutualfundorder",
        name: "Mutual fund orders",
        icon: <FaMoneyBill />,
      },
      {
        path: "/reports/dormantclientlist",
        name: "Dormant client list",
        icon: <FaMoneyBill />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                ></motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink to={route.path} key={index} className="link">
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
