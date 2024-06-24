import React, { useContext, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import MenuContext from "../context/MenuContext";
import Main from "../Bases/Main";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

const Shorts = () => {
  const { setStatusMenu, statusMenu } = useContext(MenuContext);
  const apiShort = "https://cd25e9904cf66451.mokky.dev/short";
  const [short, shortVideo] = useState();
  useEffect(() => {
    axios.get(apiShort).then((res) => shortVideo(res?.data));
  }, []);

  const [like,setLike] = useState(false)
const [dislike,setDislike] = useState(false)
const [likeavtive,setLikeactive] = useState(0)
const [dislikeactive,setDislikeactive] = useState(0)
// const { setStatusMenu, statusMenu } = useContext(MenuContext);


const likes = () => {
  setLike(!like)
  setDislike(false)
  setLikeactive(!like?1:0)
  setDislikeactive(0)
}

const dislikes = () => {
  setDislike(!dislike)
  setLike(false)
  setLikeactive(0)
  setDislikeactive(!dislike?1:0)
}

  const dislikef = () => {
    if (dislikeactive) {
      setDislikeactive(false);
      setDislike(dislike - 1);
    } 
    else {
      setDislikeactive(true);
      setDislike(like + 1);
      if (likeactive) {
        setDislikeactive(false);
        setDislike(dislike + 1);
        setLike(like - 1);
      }
    }
  };

  return (
    <div className=" font-mono">
      <div
        className={`max-w-[300px] fixed top-0 transition-all ${
          statusMenu ? "left-[-300px]" : "left-[0px]"
        } py-[15px] px-[15px] h-[100vh] overflow-auto bg-[#000000] `}
      >
        <CiMenuBurger
          onClick={() => setStatusMenu(!statusMenu)}
          className="text-[24px] text-[white] mr-[20px]"
        />
        <div>
          <Main />
        </div>
      </div>
      <div className="">
        {short?.map((v) => (
          <div key={v?.id} className="flex justify-center">
            <div className="">
              <iframe
                className="w-[491px] h-[925px] rounded-t-xl"
                src={v?.img}
                alt=""
              />
              <div className="mt-[-150px] px-[10px] absolute">
                <div className="flex items-center gap-3">
                  <img
                    src={v?.imgUser}
                    alt=""
                    className="w-[36px] h-[36px] rounded-full"
                  />
                  <h1 className="text-[white]">{v?.userTitle}</h1>
                  <button className="text-[black] bg-[#fff] w-[98px] h-[36px] rounded-3xl text-[14px]">
                    {v?.button}
                  </button>
                </div>
                <div className="mt-[10px] px-[10px]">
                  <h2 className="text-[white]">{v?.title}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-end pl-[15px]">
              <button className="text-white w-[65px] bg-[gray] rounded-full px-[20px]">
                <AiFillLike onClick={()=>likes()} className={like?"text-[white] text-[20px]":"text-[black] text-[20px]"}/>
                {likeavtive}
              </button>
              <button className="text-white  w-[65px] bg-[gray] rounded-full px-[20px]" onClick={()=>dislikes()}>
                <BiSolidDislike onClick={()=>dislikes()}
                className={dislike?"text-[white] text-[20px]":"text-[black] text-[20px]"}/>
                {dislikeactive}
              </button>
              <button className="text-white  w-[65px] bg-[gray] rounded-full">
                <MdInsertComment className="text-[white] text-[45px] pl-[17px]"/>
              </button>
              <button className="text-white  w-[65px] bg-[gray] rounded-full">
                <IoIosShareAlt className="text-[white] text-[45px] pl-[17px]"/>
              </button>
              <button className="text-white  w-[65px] bg-[gray] rounded-full ">...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorts;
