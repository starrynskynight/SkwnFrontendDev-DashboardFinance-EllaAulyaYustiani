import { ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountFinanceHeader() {
  return (
    <div className="w-full w-[500px] h-[200px] mx-auto bg-gradient-to-br from-sky-400 to-blue-500 text-white py-12 px-4 pb-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <ArrowLeft className="w-5 h-5 hover:scale-110 transition-transform" />
          </Link>
          <span className="text-sm font-medium">Account Finance</span>
        </div>
        <HelpCircle className="w-5 h-5" />
      </div>

      <div className="mt-6">
        <p className="text-3xl font-bold tracking-wide">Rp. 25.550.000,-</p>
        <p className="text-lg text-white/80 mt-1">12 June 2022</p>
      </div>
    </div>
  );
}
