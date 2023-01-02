import React, { Fragment } from "react";
import Card from "./Card";
import data from "../data.js";
const CardList = () => {
  return (
    <main className="space-y-12 mobile:space-y-6 px-4 pb-16 pt-8 ">
      {data.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </main>
  );
};

export default CardList;
