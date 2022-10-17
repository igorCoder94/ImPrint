import React from 'react';

export const Page404: React.FC = () => {
  return (
    <div
      className=" fixed top-0 left-0 h-screen
     w-screen flex flex-col justify-start bg-[url('src/assets/images/bg_404.jpg')] bg-cover leading-[80px] text-center pt-[140px] select-none"
    >
      <div className="text-[96px] text-shadow-404">imprint</div>
      <div className="text-[36px] mb-[120px] text-shadow-404">случился error</div>
      <div className="text-[288px] text-shadow-404">404</div>
    </div>
  );
};
