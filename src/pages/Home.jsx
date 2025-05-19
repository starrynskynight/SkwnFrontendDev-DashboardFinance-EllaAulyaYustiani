import Cards from '../components/Card'
import Services from '../components/Services'
import ActivitySection from '../components/ActivitySection'
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="bg-white min-h-screen pb-14 overflow-hidden">
      <div className="max-w-[430px] mx-auto">
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-gray-500">Hello,</p>
            <h1 className="text-2xl font-bold">Aurellia!</h1>
          </div>
          <img
            src="https://images.unsplash.com/photo-1611590027211-b954fd027b51?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <Cards />
        <Services />
        <SectionHeader
          title="Activity"
          right={
            <a href="#" className="text-sm text-[#343C6A] hover:underline">
              See All
            </a>
          }
        />
        <ActivitySection />
      </div>
    </div>
  );
}
