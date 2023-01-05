import { Children, createContext, useReducer } from "react";
import data from "../data";

export const DataContext = createContext(null);
export const DataDispatchContext = createContext(null);

function dataReducer(cardData, action) {
  switch (action.type) {
    case "language":
      return cardData.filter((card) => card.languages.includes(action.id));
    case "tool":
      return cardData.filter((card) => card.tools.includes(action.id));
    case "role":
      return cardData.filter((card) => card.role === action.id);
    case "clicked":
      return cardData.filter((item) =>
        item.languages
          .map((language) => {
            return language.toLowerCase();
          })
          .includes(action.searchItem)
      );
  }
}

const CardDataProvider = ({ children }) => {
  const [cardData, dispatch] = useReducer(dataReducer, data);
  return (
    <DataContext.Provider value={cardData}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};

export default CardDataProvider;
