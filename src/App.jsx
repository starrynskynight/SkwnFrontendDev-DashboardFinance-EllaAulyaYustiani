// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import MainLayout from './layouts/MainLayout';
import PlainLayout from './layouts/PlainLayout';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<PlainLayout />}>
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}
