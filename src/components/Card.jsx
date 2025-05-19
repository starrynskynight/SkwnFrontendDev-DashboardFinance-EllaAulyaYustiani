// src/components/MyCards.jsx
export default function Cards() {
  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[14px] text-[#343C6A]">Your Visa</h2>
        <a href="#" className="text-sm text-[#343C6A] hover:underline">See All</a>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-2">
          {[1, 2].map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-[#4CBAED] to-[#198EF3]
                rounded-2xl w-[280px] h-[170px] flex-shrink-0 text-white p-4
                flex flex-col justify-between shadow-lg">
              <div className="flex justify-between items-center">
                <svg width="34px" height="34px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" fill="#FFFFFF" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#198EF39800" d="M5,35V13c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H9C6.8,39,5,37.2,5,35z"></path> <g fill="#198EF3"> <path d="M43,21v-2H31c-1.1,0-2-0.9-2-2s0.9-2,2-2h1v-2h-1c-2.2,0-4,1.8-4,4s1.8,4,4,4h3v6h-3c-2.8,0-5,2.2-5,5 s2.2,5,5,5h2v-2h-2c-1.7,0-3-1.3-3-3s1.3-3,3-3h12v-2h-7v-6H43z"></path> <path d="M17,27h-3v-6h3c2.2,0,4-1.8,4-4s-1.8-4-4-4h-3v2h3c1.1,0,2,0.9,2,2s-0.9,2-2,2H5v2h7v6H5v2h12 c1.7,0,3,1.3,3,3s-1.3,3-3,3h-2v2h2c2.8,0,5-2.2,5-5S19.8,27,17,27z"></path> </g> </g></svg>
                <span className="text-xs font-semibold">Premium</span>
              </div>

              <div className="tracking-widest font-semibold text-sm">
                4000&nbsp;&nbsp;5127&nbsp;&nbsp;2123&nbsp;&nbsp;2018
              </div>

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
