import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Shorts from "../pages/Shorts"
import Subscribes from "../pages/Subscribes"
import Channel from "../pages/Channel"
import YourVideos from "../pages/Yourvideos"
import Later from "../pages/Later"
import Likes from "../pages/Likes"
import Navigate from "../pages/Navigate"
import Main2 from "./Main2";
import ERROR from "../pages/ERROR";
import { Video } from "../pages/Video";

const MainLinks = () => {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Main2/>}/>
        <Route path="/shorts" element={<Shorts/>}/>
        <Route path="/subscribes" element={<Subscribes/>}/>
        <Route path="/channel" element={<Channel/>}/>
        <Route path="/yourvideos" element={<YourVideos/>}/>
        <Route path="/later" element={<Later/>}/>
        <Route path="/likes" element={<Likes/>}/>
        <Route path="/navigate" element={<Navigate/>}/>
        <Route path="/video/:id" element={<Video/>}/>
        <Route path="*" element={<ERROR/>}/>
      </Routes>
    </div>
  );
};

export default MainLinks;
