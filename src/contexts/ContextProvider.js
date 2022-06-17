import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentMode, setCurrentMode] = useState("light");
  const [isClicked, setIsClicked] = useState(initialState);
  const [activeMenu, setActiveMenu] = useState(true);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (e) => {
    setCurrentColor(e.target.value);
    localStorage.setItem("themeColor", e.target.value);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        screenSize,
        currentColor,
        themeSettings,
        currentMode,
        isClicked,
        activeMenu,
        setScreenSize,
        setCurrentColor,
        setThemeSettings,
        setCurrentMode,
        setIsClicked,
        setActiveMenu,
        setMode,
        setColor,
        handleClick,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
