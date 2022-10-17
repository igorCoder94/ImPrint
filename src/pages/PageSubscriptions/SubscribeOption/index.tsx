import React from 'react';
import IconCheck from '../../../assets/icons/subscribtions/check.svg';

interface ISubscribeOptionProps {
  title: string;
  payment: string;
  text: string[];
  id: number;
}

export const SubscribeOption: React.FC<ISubscribeOptionProps> = ({ title, payment, text, id }) => {
  return (
    <div
      style={
        id === 0
          ? {
              background: 'linear-gradient(180deg, #004E7C 0%, #3B6FCB 100%)',
            }
          : id === 1
          ? { background: 'linear-gradient(180deg, #004E7C 0%, #018FBA 100%)' }
          : {
              background:
                'linear-gradient(180.05deg, #004E7C 0.04%, #00ADC5 64.88%, #0ED9F5 97.35%)',
            }
      }
      className="relative h-[443px] max-w-[331px] flex flex-col justify-between px-[26px] py-[16px] rounded-[12px] bg-[linear-gradient(180deg, #004E7C 0%, #3B6FCB 100%)]"
    >
      <div className="text-center text-[24px] text-[#CACCE2] mb-[43px]">{title}</div>
      <div className={`text-left text-[#9FA3C5] ${id === 2 ? 'text-[#FFFFFF]' : ''}`}>
        {text.map((item, index) => {
          return (
            <div key={index} className="mb-5">
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-center mb-[23px]">{payment}</div>
        <button className="bg-[#024F7F] text-[#9FA3C5] py-[11px] px-[25px] rounded-[7px]">
          оформить
        </button>
      </div>
      {id === 1 && <img className="absolute top-[-32px] right-0 w-50" src={IconCheck} alt="" />}
    </div>
  );
};
