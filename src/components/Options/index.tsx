import React, { useState } from 'react';
import IconArrowDown from '../../assets/icons/arrow_down.svg';

interface IOptionsProps {
  text: string;
}

export const Options: React.FC<IOptionsProps> = ({ text }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const switchCollapsed = (): void => {
    setIsCollapsed((prevState: boolean) => !prevState);
  };

  return (
    <div>
      <div
        className={`flex flex-row justify-between py-2 px-5 bg-dark rounded-[14px] ${
          isCollapsed ? 'h-[40px] overflow-hidden' : 'h-[400px]'
        }`}
      >
        <div>v</div>
        <div className="text-gray-default text-[19px]">{text}</div>
        <button
          className={`flex flex-col justify-start pt-2 ${
            !isCollapsed ? 'rotate-180 justify-end pb-2' : ''
          }`}
          onClick={switchCollapsed}
        >
          <img src={IconArrowDown} alt="arrow_down" />
        </button>
      </div>
    </div>
  );
};
