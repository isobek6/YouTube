import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { GrHistory } from "react-icons/gr";
import { MdPlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiMeteor } from "react-icons/bi";
import { IoMdMusicalNote } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { PiBroadcastFill } from "react-icons/pi";
import { RiNewspaperFill } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import { BsFillLightbulbFill } from "react-icons/bs";
import { TbHanger2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFlagSolid } from "react-icons/lia";
import { BiHelpCircle } from "react-icons/bi";
import { VscReport } from "react-icons/vsc";
import { SiYoutubemusic } from "react-icons/si";
import { CiMenuBurger } from "react-icons/ci";
import MenuContext from "../context/MenuContext";

const Main = () => {
  const { setStatusMenu, statusMenu } = useContext(MenuContext);

  const arr = [
    {
      id: 1,
      title: "Главная",
      image: <GoHomeFill className="text-[24px] text-[white] h" />,
      link: "/",
    },
    {
      id: 2,
      title: "Shorts",
      image: <SiYoutubeshorts className="text-[24px] text-[white]" />,
      link: "/shorts",
    },
    {
      id: 3,
      title: "Подписки",
      image: <MdOutlineSubscriptions className="text-[24px] text-[white]" />,
      link: "/subscribes",
    },
  ];
  const arr2 = [
    {
      id: 1,
      title: "Мой канал",
      image: <BiSolidUserAccount className="text-[24px] text-[white]" />,
      link: "/channel",
    },
    {
      id: 2,
      title: "История",
      image: <GrHistory className="text-[24px] text-[white]" />,
      link: "/channel",
    },
    {
      id: 3,
      title: "Плейлист",
      image: <MdPlaylistPlay className="text-[24px] text-[white]" />,
      link: "/playlist",
    },
    {
      id: 4,
      title: "Ваши видео",
      image: <GoVideo className="text-[24px] text-[white]" />,
      link: "/yourvideos",
    },
    {
      id: 5,
      title: "Смотреть позже",
      image: <MdAccessTime className="text-[24px] text-[white]" />,
      link: "/later",
    },
    {
      id: 6,
      title: "Понравившиеся",
      image: <BiSolidLike className="text-[24px] text-[white]" />,
      link: "/likes",
    },
  ];

  const arr3 = [
    {
      id: 1,
      title: "В тренде",
      image: <BiMeteor className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 2,
      title: "Музыка",
      image: <IoMdMusicalNote className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 3,
      title: "Трансляции",
      image: <PiBroadcastFill className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 4,
      title: "Киберспорт",
      image: <IoGameController className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 5,
      title: "Новости",
      image: <RiNewspaperFill className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 6,
      title: "Спорт",
      image: <TfiCup className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 7,
      title: "Мода и Красота",
      image: <TbHanger2 className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
    {
      id: 8,
      title: "Обучение",
      image: <BsFillLightbulbFill className="text-[24px] text-[white]" />,
      link: "/navigate",
    },
  ];

  console.log(statusMenu);

  return (
    <div
      className={`max-w-[300px] z-[99999999999] relative  bg-[#000000]  top-[15px] transition-all ${
        statusMenu
          ? " w-[300px] relative z-[9999]"
          : "w-[80px] flex flex-col text-[12px] items-center"
      }   h-[100vh] overflow-auto bg-[#000000] `}
    >
      <div className="flex flex-col  gap-y-4">
        {arr.map((el) => (
          <NavLink
            key={el.id}
            className={
              "flex text-[white]    font-mono hover:bg-gray-500 hover:rounded-md transition-all  py-[5px]"
            }
            to={el.link}
          >
            <div
              className={` ${
                statusMenu
                  ? " w-[300px] flex"
                  : "w-[100px] flex flex-col text-[12px] items-center"
              }  `}
            >
              {el.image} {el.title}
            </div>
          </NavLink>
        ))}
      </div>
      <div className={statusMenu?"flex flex-col gap-3 mt-[10px] gap-y-4 ":"hidden"}>
      <div className="mt-[15px]">
        <h1 className="text-[white]">Вы</h1>
      </div>
        {arr2.map((el) => (
          <NavLink
            key={el.id}
            className={
              "flex text-[white] gap-[20px] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
            }
            to={el.link}
          >
        
              
            {el.image} {el.title}
           
          </NavLink>
        ))}
      </div>
      <div className={statusMenu?"flex flex-col gap-3 mt-[10px] gap-y-4 ":"hidden"} >
      <div className="mt-[15px]">
        <h1 className="text-[white]">Навигатор</h1>
      </div>
        {arr3.map((el) => (
          <NavLink
            key={el.id}
            className={
              "flex text-[white] gap-[20px] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
            }
            to={el.link}
          >
            {el.image} {el.title}
          </NavLink>
        ))}
      </div>
      <div className={statusMenu?"flex flex-col gap-3 mt-[10px] gap-y-4 ":"hidden"}>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <IoSettingsOutline className="text-[24px] text-[white]" /> Настройки
        </NavLink>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <LiaFlagSolid className="text-[24px] text-[white]" /> История отчета
        </NavLink>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <BiHelpCircle className="text-[24px] text-[white]" /> Помощь
        </NavLink>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <VscReport className="text-[24px] text-[white]" /> Отправить отзыв
        </NavLink>
      </div>
      <div className={statusMenu?"flex flex-col gap-3 mt-[10px] gap-y-4 ":"hidden"}>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <SiYoutubemusic className="text-[24px] text-[white]" /> @london586
          subscribe
        </NavLink>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <SiYoutubemusic className="text-[24px] text-[white]" /> @london586
          subscribe
        </NavLink>
        <NavLink
          className={
            "flex gap-2 text-[white] font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <SiYoutubemusic className="text-[24px] text-[white]" /> @london586
          subscribe
        </NavLink>
        <NavLink
          className={
            "flex gap-2 text-[white]  font-mono hover:bg-gray-500 hover:rounded-md transition-all px-[10px] py-[5px]"
          }
          to={"/navigate"}
        >
          <SiYoutubemusic className="text-[24px] text-[white]" /> @london586
          subscribe
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
