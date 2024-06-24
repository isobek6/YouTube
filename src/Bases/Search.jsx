import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const baseUrl = "https://60c97156e116e1ff.mokky.dev/movies";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setData(res?.data))
      .catch((e) => console.log(e));
  }, []);

  function handlerSearch(value) {
    setInput(value);
    setSearch(
      data.filter((el) => {
        return el.title
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim());
      })
    );
  }
console.log(data);
  return (
    <div className="relative top-[0]">
      <input
        type="text"
        placeholder="Введите запрос"
        className="w-[200px] h-[40px] bg-[#121212] rounded-full border-2 border-[#121212] pl-[10px] outline-none text-[white] font-mono md:w-[480px]"
        onChange={(e) => handlerSearch(e.target.value)}
      />
      <div
        style={{
          position: "absolute",
          top: "50px",
          color: "white",
          width: "100%",

          background: "black",
        }}
      >
        {input &&
          search.map((el) => (
            <p
              className="color-white p-[5px]"
              style={{ borderBottom: "1px solid gray", cursor: "pointer" }}
              onClick={() => navigate(`/video/${el.id}`)}
            >
              {el.title}
            </p>
          ))}
      </div>
    </div>
  );
}

export { Search };
