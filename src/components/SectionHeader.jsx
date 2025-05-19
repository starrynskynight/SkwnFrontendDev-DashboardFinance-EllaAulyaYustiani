export default function SectionHeader({ title, right }) {
  return (
    <div className="flex justify-between bg-white items-center mb-4 pt-4 px-4">
      <h2 className="text-[#343C6A] text-sm font-semibold">{title}</h2>
      {right}
    </div>
  );
}
