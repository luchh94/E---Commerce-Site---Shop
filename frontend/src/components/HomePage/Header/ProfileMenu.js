import React from "react";
import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  const logoutHandler = (event) => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <Menu as="div" class="relative inline-block text-left w-[60%] ml-0 mr-0 z-30 cursor-pointer">
      <div>
        <Menu.Button
          type="button"
          class="inline-flex overflow-hidden justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {" "}
          <p class="truncate">{userInfo.name}</p>
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </Menu.Button>
      </div>

      <Menu.Items
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <Link
            to="/profile"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm no-underline"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Profile and Orders
          </Link>
          {userInfo.isAdmin ? (
            <Link
              to="/admin/users"
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm no-underline"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Admin USERS
            </Link>
          ) : (
            <></>
          )}
          {userInfo.isAdmin ? (
            <Link
              to="/admin/products"
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm no-underline"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Admin PRODUCTS
            </Link>
          ) : (
            <></>
          )}
          {userInfo.isAdmin ? (
            <Link
              to="/admin/orders"
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm no-underline"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Admin ORDERS
            </Link>
          ) : (
            <></>
          )}

          <form method="POST" action="#" role="none">
            <button
              onClick={logoutHandler}
              type="submit"
              class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default ProfileMenu;
