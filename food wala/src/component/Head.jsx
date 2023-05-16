import React from "react";

import { LOGO } from "../Utilities/logo";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className=" flex justify-between shadow-lg ">
      <div>
        <img className="h-28 p-2 rounded-3xl " src={LOGO} alt="logo" />
      </div>
      <div className="bg-blue-950 h-16 w-80 my-9 rounded-xl text-center ">
        <Link className=" m-3 px-3 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50" to="/">
          Home
        </Link>
        <Link className="m-2 px-3 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50" to="/contact">
          contact
        </Link>
        <Link className="m-2 px-3 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50" to="/">
          about
        </Link>
      </div>
      <div>login</div>
    </div>
  );
}

export default Head;
