// src/components/MyCards.jsx
export default function Cards() {
  return (
    <div className="w-full px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[14px] text-[#343C6A]">Your Visa</h2>
        <a href="#" className="text-sm text-[#343C6A] hover:underline">See All</a>
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-2">
          {[1, 2].map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-[#4CBAED] to-[#198EF3]
                rounded-2xl w-[280px] h-[170px] flex-shrink-0 text-white p-4
                flex flex-col justify-between shadow-lg"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <div className="w-8 h-8 bg-white/40 rounded-md" />
                <span className="text-xs font-semibold">Premium</span>
              </div>

              {/* Card Number */}
              <div className="tracking-widest font-semibold text-sm">
                4000&nbsp;&nbsp;5127&nbsp;&nbsp;2123&nbsp;&nbsp;2018
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>Aurellia</span>
                <span className="text-white font-bold text-sm">VISA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
