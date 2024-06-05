import { useState } from "react";

const useDropdownMenu = () => {
  const [toggle, setToggle] = useState({
    notifications: false,
    messages: false,
    profile: false,
    dashboard: false,
    task: false,
    forms: false,
    tables: false,
    pages: false,
  });
  const toggleMenu = (value) => {
    switch (value) {
      case "notifications":
        setToggle({ ...toggle, notifications: !toggle.notifications });
        break;
      case "messages":
        setToggle({ ...toggle, messages: !toggle.messages });
        break;
      case "profile":
        setToggle({ ...toggle, profile: !toggle.profile });
        break;
      case "dashboard":
        setToggle({ ...toggle, dashboard: !toggle.dashboard });
        break;
      case "task":
        setToggle({ ...toggle, task: !toggle.task });
        break;
      case "forms":
        setToggle({ ...toggle, forms: !toggle.forms });
        break;
      case "tables":
        setToggle({ ...toggle, tables: !toggle.tables });
        break;
      case "pages":
        setToggle({ ...toggle, pages: !toggle.pages });
        break;
      default:
        setToggle(toggle);
    }
  };

  return { toggle, toggleMenu };
};

export default useDropdownMenu;
