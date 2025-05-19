import { FaRegCreditCard, FaDollarSign, FaChartLine, FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { icon: <FaRegCreditCard size={20} />, label: "Card" },
    { icon: <FaDollarSign size={20} />, label: "Finance", to: "/detail" },
    { icon: <FaChartLine size={20} />, label: "Top Up" },
    { icon: <FaQuestionCircle size={20} />, label: "Help" },
  ];

  return (
    <div className="w-full pt-4 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[14px] text-[#343C6A]">Services</h2>
        <a href="#" className="text-sm text-[#343C6A] hover:underline">See All</a>
      </div>

      {/* Scrollable Services */}
      <div className="w-full max-w-sm mx-auto px-2">
  <div className="flex justify-between text-center">
    {services.map((item, idx) => {
      const Wrapper = item.to ? Link : "div";

      return (
        <Wrapper
          key={idx}
          to={item.to}
          className="flex flex-col items-center w-1/4 hover:scale-105 transition-transform"
        >
          <div className="bg-[#E9F0FF] text-[#4F8DFD] w-12 h-12 rounded-full flex items-center justify-center mb-1 hover:bg-blue-100 transition-colors">
            {item.icon}
          </div>
          <span className="text-xs text-[#343C6A]">{item.label}</span>
        </Wrapper>
      );
    })}
  </div>
</div>

    </div>
  );
}
