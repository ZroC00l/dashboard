import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

import avatar from "../data/avatar.png";
import { Button } from ".";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          size="2xl"
          bgHoverColor="light-gray"
          color="rgb(153, 171, 180)"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img src={avatar} alt="avatar" className="rounded-full w-24 h-24" />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Uncle_Groovey
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrator
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            www.unclegroovey.netlify.app
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button
        icon={<MdOutlineCancel />}
        size="2xl"
        bgHoverColor="light-gray"
        color="rgb(153, 171, 180)"
        borderRadius="50%"
      />
    </div>
  );
};

export default UserProfile;
