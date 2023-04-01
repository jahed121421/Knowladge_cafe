import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="flex-1">
        <a className="btn btn-ghost">KNOWLADGE CAFE</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="../../src/assets/icon.jpg" />
            </div>
          </label>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
