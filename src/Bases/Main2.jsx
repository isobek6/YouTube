import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import MenuContext from "../context/MenuContext";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Main2 = () => {
  const api = "https://60c97156e116e1ff.mokky.dev/movies";
  const [data, setData] = useState();
  const { setStatusMenu, statusMenu } = useContext(MenuContext);

  useEffect(() => {
    axios.get(api).then((res) => setData(res?.data));
  }, []);

  const [click, setClick] = useState("Все");

  const setClicks = (str) => {
    setClick(str);
  };

  return (
    <div className="w-full flex h-screen overflow-x-hidden">
      <div className=" mr-[20px] max-w-[250px]  overflow-x-hidden">
        <Main />
      </div>
      <div
        className={
          statusMenu ? "w-[1920px] justify-start relative h-full " : " pl-[0px]"
        }
      >
        <div className=" w-full relative h-[50px] bg-[black] gap-3 py-[10px]">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={7}
            // navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className=" w-[910px] absolute left-3"
          >
            <SwiperSlide>
              <button
                onClick={() => setClicks("Все")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Все
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Видеоигры")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Видеоигры
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Музыка")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Музыка
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Демоны")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Демоны
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Драма")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Драма
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Исекай")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Исекай
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Экшен")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Экшен
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Приключения")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Приключения
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Полнометраж")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Полнометраж
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setClicks("Комедия")}
                className="w-[110px] font-mono h-[32px] bg-[rgb(40,40,40)] rounded-md text-[white]"
              >
                Комедия
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-[100%] bg-[#000000] text-[white] px-[15px] font-mono py-[10px]">
            {data?.map((el) => {
              if (el.filter === click) {
                return (
                  <Link to={`/video/${el.id}`} key={el.id} className="w-[100%]">
                    <div className="h-[300px]">
                      <img
                        src={el.img}
                        alt=""
                        className="w-[100%] max-w-[500px] h-[195px] rounded-xl object-cover"
                      />
                      <div className="flex gap-4 p-[3px]">
                        <img
                          src={el.UserIcon}
                          alt=""
                          className="w-[36px] h-[36px] rounded-full"
                        />
                        <div>
                          <h1 className="">{el.title}</h1>
                          <p className="w-[290px] mt-[5px] text-[#AAAAAA]">
                            {el.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
              if (click === "Все") {
                return (
                  <Link to={`/video/${el.id}`} key={el.id}>
                    <div className="h-[300px]">
                      <img
                        src={el.img}
                        alt=""
                        className="w-[100%] max-w-[500px] h-[195px] rounded-xl"
                      />
                      <div className="flex gap-4 p-[3px]">
                        <img
                          src={el.UserIcon}
                          alt=""
                          className="w-[36px] h-[36px] rounded-full"
                        />
                        <div>
                          <h1 className="">{el.title}</h1>
                          <p className="w-[290px] mt-[5px] text-[#AAAAAA]">
                            {el.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
