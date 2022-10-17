import React from 'react';
import IconArrow from '../../assets/icons/ui/arrow_input.svg';

export const InputSearch: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-[40px]">
      <input
        className="w-full bg-input-search rounded-[9px] placeholder-gray-default py-2.5 px-7 mr-2 font-medium shadow-[inset_0px_0px_4px_#363636]"
        type="text"
        placeholder={'search...'}
      />
      <button className="flex flex-col justify-center rounded-[9px] px-3 bg-blue-default">
        <img src={IconArrow} alt="arrow" />
      </button>
    </div>
  );
};
