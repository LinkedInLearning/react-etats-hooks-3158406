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
