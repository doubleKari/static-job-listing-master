import React from "react";

const Card = ({
  company,
  logo,
  fresh,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <section
      className={`${
        featured && "border-l-8  border-l-cyan-300"
      }   bg-white mx-auto mobile:mx-auto  mobile:w-4/5 rounded-lg shadow-lg relative mobile:static`}
    >
      <div className="px-6 pt-10 mobile:pt-5 mobile:flex mobile:justify-between mobile:items-center">
        {/* logo */}

        <div className=" border-b pb-4 mobile:flex gap-5 mobile:items-center">
          <div className="w-16 h-16 mobile:w-24 mobile:h-24 absolute  -top-8 left-5 mobile:static rounded-full ">
            <img src={logo} className="w-full h-full" alt="logo" />
          </div>
          <div className="space-y-2 mobile:space-y-1">
            <div className="flex gap-5 items-center">
              <h1 className="text-cyan-300 font-bold inline-block">
                {company}
              </h1>
              <div className="flex gap-2 items-center">
                {fresh && (
                  <spa className="bg-cyan-300 flex items-center  text-cyan-100 font-bold px-4 py-1 text-sm uppercase rounded-full">
                    new!
                  </spa>
                )}
                {featured && (
                  <span className="bg-cyan-500 iflex items-center text-cyan-100  font-bold px-4 py-1 text-sm uppercase rounded-full">
                    featured
                  </span>
                )}
              </div>
            </div>
            <p className="text-cyan-500 font-bold hover:cursor-pointer">
              {position}
            </p>
            <div className="text-cyan-400 space-x-2">
              <span className="inline-block">{postedAt} </span>
              <span>&bull;</span>
              <span className="inline-block">{contract} </span>
              <span>&bull;</span>
              <span className="inline-block">{location}</span>
            </div>
          </div>
        </div>
        {/* Lower section */}
        <div className="mt-4 flex flex-wrap gap-3 pb-5">
          {languages.map((language) => (
            <div
              key={language}
              className="px-4 py-1 rounded-md font-bold bg-cyan-200 hover:bg-cyan-300 text-cyan-300 hover:text-cyan-200 hover:cursor-pointer text-center"
            >
              {language}
            </div>
          ))}
          {tools.map((tool) => (
            <div
              key={tool}
              className="px-4 py-1 rounded-md font-bold bg-cyan-200 hover:bg-cyan-300 text-cyan-300 hover:text-cyan-200  hover:cursor-pointer text-center"
            >
              {tool}
            </div>
          ))}
          <div className="px-4 py-1 rounded-md font-bold bg-cyan-200 hover:bg-cyan-300 text-cyan-300 hover:text-cyan-200  hover:cursor-pointer text-center">
            {role}
          </div>
          <div className="px-4 py-1 rounded-md font-bold bg-cyan-200 hover:bg-cyan-300 text-cyan-300  hover:text-cyan-200  hover:cursor-pointer text-center">
            {level}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
