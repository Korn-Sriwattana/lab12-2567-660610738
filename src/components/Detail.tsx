import { LangContext } from "@contexts/LangContext";
import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        {/* Display activated theme message here (EN or TH) */}
        {theme.name === "dark" ? lang.detail.darkActivated : lang.detail.lightActivated} {/* tip: Get information from "lang" variable to determine which theme is currently selected */}
      </p>
    </div>
  );
};
