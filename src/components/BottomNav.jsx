import { FaHome, FaClock, FaCommentAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
      <div className="flex justify-around py-2">
        <NavItem icon={<FaHome />} active />
        <NavItem icon={<FaClock />} />
        <NavItem icon={<FaCommentAlt />} />
        <Link to="/profile">
          <NavItem icon={<FaUser />} />
        </Link>
      </div>
    </div>
  );
}

function NavItem({ icon, active }) {
  return (
    <button className="flex flex-col items-center justify-center text-sm">
      <div className={`text-xl ${active ? "text-blue-600" : "text-gray-400"}`}>
        {icon}
      </div>
      {active && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1"></div>}
    </button>
  );
}
