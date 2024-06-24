import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { PiScissorsFill } from "react-icons/pi";
import Main from "../Bases/Main";
import MenuContext from "../context/MenuContext";
import { useContext } from "react";

function Video() {
  const params = useParams();
  const [video, setVideo] = useState();
  const api = `https://60c97156e116e1ff.mokky.dev/movies/${params.id}`;
  useEffect(() => {
    axios.get(api).then((res) => setVideo(res.data));
  }, []);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeavtive, setLikeactive] = useState(0);
  const [dislikeactive, setDislikeactive] = useState(0);
  const { setStatusMenu, statusMenu } = useContext(MenuContext);

  const likes = () => {
    setLike(!like);
    setDislike(false);
    setLikeactive(!like ? 1 : 0);
    setDislikeactive(0);
  };

  const dislikes = () => {
    setDislike(!dislike);
    setLike(false);
    setLikeactive(0);
    setDislikeactive(!dislike ? 1 : 0);
  };

  return (
    <div className="relative  flex overflow-x-hidden">
      <div className={statusMenu ? "flex relative" : " translate-x-[-100px]"}>
        {<Main />}
      </div>
      <div className="">
        <div className="max-w-[1920px] w-full mt-[40px] min-[1920px]:left-[2%] min-[2050px]:left-[4%] min-[2200px]:left-[7%] left-0 h-full absolute">
          <iframe
            className=" w-full h-[700px] rounded-3xl"
            src={video?.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h1 className="text-[white] text-[25px] font-mono mt-[10px]">
            {video?.title}
          </h1>
          <div className="flex justify-center flex-col xl:flex-row xl:items-center xl:justify-start">
            <div className="flex gap-5 mt-[15px]">
              <img
                src={video?.UserIcon}
                className="w=[36px] h-[36px] rounded-full"
                alt=""
              />
              <h1 className="text-[white] font-mono">{video?.title}</h1>
              <button className="w-[118px] h-[36px] rounded-lg text-[#000000] text-[14px] bg-[#fff] font-mono">
                Подписаться
              </button>
            </div>
            <div className="flex  items-center  gap-5">
              <div className="flex xl:flex xl:mt-[10px] xl:ml-[100px]">
                <div className="bg-[rgba(255,255,255,0.1);] flex items-center">
                  <button className="w-[104px] h-[36px] text-[white] flex gap-3 px-[15px] py-[10px]">
                    <BiLike
                      onClick={() => likes()}
                      className={
                        like
                          ? "text-[white] text-[20px]"
                          : "text-[black] text-[20px]"
                      }
                    />
                    {likeavtive}
                  </button>
                </div>
                <div className="bg-[rgba(255,255,255,0.1);]">
                  <button className="w-[66px] h-[36px] text-[white] flex gap-3 p-[10px]">
                    <BiDislike
                      onClick={() => dislikes()}
                      className={
                        dislike
                          ? "text-[white] text-[20px]"
                          : "text-[black] text-[20px]"
                      }
                    />
                    {dislikeactive}
                  </button>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1);] flex items-center rounded-full">
                <button className="text-[white] w-[146px] h-[36px] font-mono flex gap-3 p-[10px] items-center">
                  <IoMdShareAlt className="text-[white] w-[20px]" />
                  Поделиться
                </button>
              </div>
              <div className="hidden xl:flex">
                <div className="flex items-center bg-[rgba(255,255,255,0.1);] rounded-full">
                  <button className="w-[166px] h-[36px] text-[white] font-mono flex items-center gap-3 px-[10px]">
                    <PiScissorsFill className="text-[white]" />
                    Создать клип
                  </button>
                </div>
                <div className="bg-[rgba(255,255,255,0.1);] rounded-full ">
                  <button className="w-[36px] h-[36px] text-[white] pb-[8px] text-[20px]">
                    ...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Video };
