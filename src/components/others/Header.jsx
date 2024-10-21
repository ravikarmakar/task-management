import React from "react";

const Header = (props) => {
  // console.log(data);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    props.userChange("");
  };

  return (
    <div className="flex item-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">username👋🏻</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium px-6 rounded-lg"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
