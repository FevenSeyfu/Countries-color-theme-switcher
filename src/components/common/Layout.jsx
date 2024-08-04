import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext"; 

const Layout = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#f3f4f6";
      document.body.style.color = "black";
    }
  }, [theme]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;