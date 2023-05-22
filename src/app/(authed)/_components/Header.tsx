"use client";

import CustomLink from "@/components/CustomLink";
import HeaderWrapper from "@/components/HeaderWrapper";
import useUserQuery from "@/hooks/queries/useUserQuery";
import { UserData } from "@/lib/types";
import { useState } from "react";

export default function Header() {
  const userQuery = useUserQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let username;

  if (userQuery.isSuccess) {
    username = (userQuery.data as UserData).username;
  }
  return (
    <>
      <HeaderWrapper classOverrides="justify-between">
        <CustomLink href="/">
          {userQuery.isLoading ? "Loading..." : username}
        </CustomLink>
        <CustomLink href="/">Mealer</CustomLink>
        <div
          className="text-sm px-4 py-2 
      text-gray-500 hover:text-emerald-700 
      hover:bg-emerald-100 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </div>
      </HeaderWrapper>
      {!isMenuOpen ? null : (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 
        [background-color:rgb(0,0,0,0.85)]
        flex flex-col"
        >
          <button
            className="m-2 px-3 py-2 text-xs border rounded-lg 
          border-b-gray-500 text-gray-500 self-end
          hover:bg-gray-500 hover:text-white
          "
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
          <div
            className="flex flex-col overflow-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            <CustomLink
              classOverrides="text-gray-100 py-4 lg:py-8 lg:px-[150px] lg:text-4xl"
              href="/"
            >
              Home
            </CustomLink>
            <CustomLink
              classOverrides="text-gray-100 py-4 lg:py-8 lg:px-[150px] lg:text-4xl"
              href="recipes"
            >
              Recipes
            </CustomLink>
            <CustomLink
              classOverrides="text-gray-100 py-4 lg:py-8 lg:px-[150px] lg:text-4xl"
              href="meals"
            >
              Meals
            </CustomLink>
            <CustomLink
              classOverrides="text-red-300 font-bold py-4 lg:py-8 lg:px-[150px] lg:text-4xl"
              href="logout"
            >
              Logout
            </CustomLink>
          </div>
        </div>
      )}
    </>
  );
}
