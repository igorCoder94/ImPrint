import React from 'react';

import { sidebarData } from './data';
import IconExit from '../../assets/icons/sidebar/exit.svg';
import { NavigateFunction, useNavigate, useLocation } from 'react-router-dom';

interface IImagesBar {
  id: number;
  text: string;
  img: string;
  imgWhite: string;
  link: string;
}

export const Sidebar: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const { pathname } = useLocation();

  const isCurrentPage = (link: string): boolean => {
    return pathname === link;
  };

  return (
    <div
      className="fixed top-[h-header] left-0 p-[20px]  h-full max-h-[784px] bg-dark
     rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-between select-none"
    >
      <div className="flex flex-col justify-start">
        {sidebarData.map((item: IImagesBar) => (
          <button
            key={item.id}
            className={`text-center mb-[40px] cursor-pointer duration-300 ease-in-out active:translate-y-1 p-1
            ${!isCurrentPage(item.link) ? 'hover:scale-125' : 'cursor-default'}
            `}
            onClick={() => (!isCurrentPage(item.link) ? navigate(item.link) : null)}
          >
            {!isCurrentPage(item.link) ? (
              <img className="inline" src={item.img} alt="icon" draggable="false" />
            ) : (
              <img className="inline" src={item.imgWhite} alt="icon" draggable="false" />
            )}
            <div
              className={`text-[#4F60FF] text-[12px] text-center font-semibold ${
                isCurrentPage(item.link) ? 'text-[white]' : ''
              }`}
            >
              {item.text}
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => navigate('/login')}
        className="text-center cursor-pointer duration-300 ease-in-out hover:scale-125 active:translate-y-1 "
      >
        <img className="inline" src={IconExit} alt="icon" draggable="false" />
        <div className="text-[#4F60FF] text-[12px]">выйти</div>
      </button>
    </div>
  );
};
