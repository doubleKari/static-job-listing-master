import { useContext, useState } from "react";
import { DataContext, DataDispatchContext } from "../context/CardDataProvider";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import Card from "./Card";

const SearcBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useContext(DataDispatchContext);

  function handleClick() {
    dispatch({
      type: "clicked",
      searchItem: input.toLowerCase(),
    });
    setInput("");
  }

  return (
    <div className="flex z-20 mobile:gap-8 gap-4 absolute -top-12 left-[20%] w-full">
      <input
        type="text"
        className="block h-8 mobile:h-16 w-1/2  focus:outline-none rounded-lg shadow-lg text-center"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconContext.Provider
        value={{
          className: "text-black font-bold w-6 h-6 mobile:h-12 mobile:w-12",
        }}
      >
        <button onClick={handleClick}>
          <BsSearch />
        </button>
      </IconContext.Provider>
    </div>
  );
};

const CardList = () => {
  const data = useContext(DataContext);

  return (
    <main className="relative">
      <SearcBar />
      <ul className="space-y-12 mobile:space-y-6 px-4 pb-16 pt-8">
        {data.map((info) => {
          return (
            <li key={info.id}>
              <Card {...info} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CardList;
