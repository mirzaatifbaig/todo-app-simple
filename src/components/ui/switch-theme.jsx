
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import {Button} from "@/components/ui/button.jsx";

const SwitchTheme = ({...props}) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
      <Button {...props}  onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
  );
};

export default SwitchTheme;
