import React from "react";
import { ToastContainer } from "react-toastify";

import Admin from "./Admin/Admin";
import Website from "./website/Website";
import { useLocation } from "react-router-dom";

const App = () => {
  const isAdmin = useLocation().pathname.includes("admin");

  return (
    <>

      <ToastContainer position="top-right" />
      {isAdmin ? <Admin /> : <Website />}

    </>
  );
};

export default App;