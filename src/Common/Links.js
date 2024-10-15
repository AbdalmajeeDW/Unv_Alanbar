import { FaUserShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { BiSolidLandmark } from "react-icons/bi";
import { BiSolidTrashAlt } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { FaBullhorn } from "react-icons/fa";

const links = [
  {
    titleLink: "الطلبة",
    url: "/students",
    icon: <FaUsers />,
  },
  {
    titleLink: "الكليات",
    url: "/colleges",
    icon: <BiSolidLandmark />,
  },
  {
    titleLink: "الأقسام",
    url: "/sections",
    icon: <BsFillGridFill />,
  },
  {
    titleLink: "الأوامر",
    url: "/decisions",
    icon: <FaBullhorn />,
  },
  {
    titleLink: "إدارة المستخدمين",
    url: "/usersManagement",
    icon: <FaUserShield />,
  },
  {
    titleLink: "سلة المحذوفات",
    url: "/recycleBin",
    icon: <BiSolidTrashAlt />,
  },
];
export default links;
