import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StorecontextProvider = (props) => {
  constcontextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={constcontextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StorecontextProvider;
