import React from 'react';
import { SubscribeOption } from './SubscribeOption';
import { subscriptionsData } from '../../data/test/pageSubscriptions';
import IconHeader from '../../assets/icons/header/icon.png';

export const PageSubscriptions: React.FC = () => (
  <div className="relative h-full w-full grid grid-cols-[1fr] px-6 overflow-y-auto overflow-x-hidden scrollbar">
    <div
      style={{
        background: 'rgba(30, 30, 30, 0.77)',
        backdropFilter: 'blur(10px)',
      }}
      className="flex flex-row justify-center flex-wrap w-full rounded-[14px] px-[42px] pt-[169px] pb-[174px] gap-12"
    >
      {subscriptionsData.map((item): any => {
        return (
          <SubscribeOption
            key={item.id}
            id={item.id}
            title={item.title}
            payment={item.payment}
            text={item.text}
          />
        );
      })}
    </div>
    <img className="absolute top-0 left-6 h-[120px]" src={IconHeader} alt="icon_header" />
  </div>
);
