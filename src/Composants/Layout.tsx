import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

const Layout = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <div className='w-[12.5vw]'>
        <Sidebar />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;