import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="h-screen w-[12.5vw] flex flex-col justify-center items-center">
      <div className="w-full flex justify-center">
        <img 
          src="src/assets/logo_circle.png" 
          alt="logo_blockchain_zero" 
          className="w-[60%] mt-[5vh] mb-[5vh] cursor-pointer" 
          onClick={handleLogoClick}
        />
      </div>
      <div className="flex-grow flex flex-col items-center">
        <h2 className="text-xl font-bold mb-[5vh]">Blockchain-0</h2>
        <ul className="text-sm">
          <li className="bg-sky-950 mb-5 pr-5 pl-5 pt-1 pb-1 border rounded-[25px] text-center font-black">
            <Link to="/">Accueil</Link>
          </li>
          <li className="bg-sky-950 mb-5 pr-5 pl-5 pt-1 pb-1 border rounded-[25px] text-center">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="bg-sky-950 mb-5 pr-5 pl-5 pt-1 pb-1 border rounded-[25px] text-center">
            <Link to="/simulateur">Simulateur</Link>
          </li>
          <li className="bg-sky-950 mb-5 pr-5 pl-5 pt-1 pb-1 border rounded-[25px] text-center">
            <Link to="/trending">Trending</Link>
          </li>
          <li className="bg-sky-950 mb-5 pr-5 pl-5 pt-1 pb-1 border rounded-[25px] text-center">
            <Link to="/exchanges">Exchanges</Link>
          </li>
          <li className="bg-sky-950 mb-5 pr-5 pl-5 pt-1 pb-1 border rounded-[25px] text-center">
            <Link to="/holdings">Holdings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;