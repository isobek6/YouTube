import { CiMenuBurger } from "react-icons/ci";
import { HiVideoCamera } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { useContext } from "react";
import MenuContext from "./context/MenuContext";
import { Search } from "./Bases/Search";  
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setStatusMenu, statusMenu } = useContext(MenuContext);
  return (
    <div className=" w-[100%] flex items-center p-[15px] justify-between bg-[#000000]">
      <div className="flex gap-3 items-center">
        <CiMenuBurger
          className="text-[24px]  text-[white]"
          onClick={() => setStatusMenu(!statusMenu)}

        />
        <Link to={"/"} className="hidden md:block">
        <img
          src="/public/Logo.png"
          alt=""

          className="w-[90px]  object-contain h-[40px] "
        />
        </Link>
      </div>
      <div className="flex">
        <div className="flex">
          <Search />
          <div className="">
            <button className=" md:w-[64px] h-[40px]">
              <img src="/poisk.png" className="w-[24px] h-[24px] " alt="" />
            </button>
          </div>
          <div className="w-[40px] h-[40px]">
            <img src="/newgolos.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <HiVideoCamera className="text-[24px] text-[white]" />
        <FaBell className="text-[24px] text-[white]" />
        <img src="/youtube.png" className="w-[32px] h-[32px]" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
