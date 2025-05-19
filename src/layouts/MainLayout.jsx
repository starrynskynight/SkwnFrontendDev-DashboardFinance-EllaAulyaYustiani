import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function MainLayout() {
  return (
    <div className="flex justify-center bg-white min-h-screen">
      <div className="w-[430px] bg-white min-h-screen relative">
        <Outlet />
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[430px]">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
