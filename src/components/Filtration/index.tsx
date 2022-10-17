import React from 'react';
import IconFilter from '../../assets/icons/filter/filter.svg';

export const Filtration: React.FC = () => {
  return (
    <div className="relative bg-dark p-3 rounded-[8px] text-gray-default">
      <div className="text-center text-[19px] mb-2">фильтрация выдачи</div>
      <div className="text-left text-[13px] mb-4">
        Фильтрация помогает искать те карточки, которые вам нужны.
      </div>
      <button className="w-full bg-blue-default text-white py-2 rounded-[7px]">
        Применить фильтры
      </button>
      <img className="w-[60px] absolute top-[0] right-0" src={IconFilter} alt="filter" />
    </div>
  );
};
