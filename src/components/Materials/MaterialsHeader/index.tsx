import React from 'react';

import IconArrowUp from '../../../assets/icons/arrow_up.svg';
import { ReactComponent as IconDots } from '../../../assets/icons/card/dots.svg';
import { ReactComponent as IconStar } from '../../../assets/icons/card/star.svg';

export const MaterialsHeader: React.FC = React.memo(() => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="text-[#5F5F5F] text-[12px]">Создано 10.05.2021</div>
        <div className="flex justify-between w-[100px]">
          <button className="flex justify-center">
            <IconStar className="w-[29px] hover:fill-[#4F60FF] duration-300 ease-in-out hover:rotate-[74deg]" />
          </button>
          <button className="w-10 flex justify-center hover:brightness-[2]">
            <IconDots />
          </button>
        </div>
      </div>
      <div className="text-2xl mb-2">React Pipeline</div>
      <div className="flex flex-row justify-start py-2 px-3.5 bg-ligth-dark rounded-[5px] mb-4">
        <img className="mr-3" src={IconArrowUp} alt="arrow_up" />
        <div className="uppercase">Тэги</div>
      </div>
    </>
  );
});
