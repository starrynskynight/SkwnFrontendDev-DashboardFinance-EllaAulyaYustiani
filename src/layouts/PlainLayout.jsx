import { Outlet } from 'react-router-dom';

export default function PlainLayout() {
  return (
    <div className="max-w-[430px] mx-auto bg-white min-h-screen">
      <Outlet />
    </div>
  );
}
