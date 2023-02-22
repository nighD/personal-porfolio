import { useState } from 'react';
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutSidebarReverse,
  BsSearch,
} from 'react-icons/bs';
import { AiFillEnvironment, AiOutlineStock } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { IoStatsChart } from 'react-icons/io5';
import { BiUserCircle } from 'react-icons/bi';
const SideBar = () => {
  const [open, setOpen] = useState(false);

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const Menus = [
    { title: 'Dashboard', spacing: true },
    { title: 'Chart', icon: <AiOutlineStock /> },
    { title: 'Static', icon: <IoStatsChart /> },
    {
      title: 'Profile',
      icon: <BiUserCircle />,
      subMenu: true,
      subMenuItems: [{ title: 'Project 1' }, { title: 'Project 2' }, { title: 'Project 3' }],
    },
  ];
  return (
    <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-purple cursor-pointer ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <AiFillEnvironment
          className={`text-4xl bg-amber-300 rounded cursor-pointer block float-left mr-2 duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1 className={`text-white origin-left font-medium duration-300 ${!open && 'scale-0'}`}>Porfolio</h1>
      </div>
      <div className={`flex items-center rounded-md bg-light-white mt-6 py-2 ${!open ? 'px-2.5' : 'px-4'}`}>
        <BsSearch className={`text-lg text-white block float-left cursor-pointer ${open && 'mr-2'}`} />
        <input
          type={'search'}
          placeholder={'Search'}
          className={`bg-transparent text-base w-full text-white focus:outline-none ${!open && 'hidden'}`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.spacing ? 'mt-9' : 'mt-2'
              }`}
            >
              <span className="text-2xl block float-left">{menu.icon ? menu.icon : <RiDashboardFill />}</span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
              {menu.subMenu && open && (
                <BsChevronDown
                  className={`${subMenuOpen && 'rotate-180'}`}
                  onClick={() => setSubMenuOpen(!subMenuOpen)}
                />
              )}
            </li>

            {menu.subMenu && subMenuOpen && open && (
              <ul>
                {menu.subMenuItems.map((subMenu, index) => (
                  <li
                    key={index}
                    className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md px-5`}
                  >
                    {subMenu.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
