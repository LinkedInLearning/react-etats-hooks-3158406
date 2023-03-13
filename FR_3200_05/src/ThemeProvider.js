import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";

const themes = {
  dark: { background: "#282c34", color: "#ecf0f1" },
  light: { background: "#ecf0f1", color: "#282c34" },
};

//ThemeContext
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isOn, setOn] = useState(false);
  const updateSettings = () => setOn(!isOn);
  const value = useMemo(() => {
    return {
      isOn,
      updateSettings,
    };
  }, [isOn]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};