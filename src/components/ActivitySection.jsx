import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const activityData = [
  {
    type: "Deposit",
    amount: "Rp15.510.000,-",
    location: "Bank Mandiri ATM",
    date: "11 March 2022",
    time: "11.21 AM",
    color: "text-blue-500",
    bg: "bg-blue-50",
    icon: <FiTrendingUp className="text-blue-500 text-xl" />,
  },
  {
    type: "Withdraw",
    amount: "Rp15.510.000,-",
    location: "Bank Mandiri ATM",
    date: "11 March 2022",
    time: "11.22 AM",
    color: "text-red-500",
    bg: "bg-red-50",
    icon: <FiTrendingDown className="text-red-500 text-xl" />,
  },
  {
    type: "Withdraw",
    amount: "Rp2.500.000,-",
    location: "Bank Mandiri ATM",
    date: "12 March 2022",
    time: "10.12 AM",
    color: "text-red-500",
    bg: "bg-red-50",
    icon: <FiTrendingDown className="text-red-500 text-xl" />,
  },
  {
    type: "Deposit",
    amount: "Rp1.000.000,-",
    location: "Bank Mandiri ATM",
    date: "13 March 2022",
    time: "08.45 AM",
    color: "text-blue-500",
    bg: "bg-blue-50",
    icon: <FiTrendingUp className="text-blue-500 text-xl" />,
  },
];

export default function ActivitySection() {
  return (
    <div className="flex justify-center items-center bg-white">
  <div className="px-4 py-2 max-w-sm w-full">
    <div className="flex flex-col gap-3">
      {activityData.map((activity, index) => (
        <div
          key={index}
          className={`rounded-xl p-3 flex flex-col gap-2 shadow-sm ${activity.bg}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-full shadow-sm">{activity.icon}</div>
              <span className="font-semibold text-sm">{activity.type}</span>
            </div>
            <span className="text-[11px] text-gray-500">{activity.date}</span>
          </div>

          <div className={`text-sm font-medium ${activity.color}`}>
            {activity.amount}
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-[11px]" />
              {activity.location}
            </div>
            <div>{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
