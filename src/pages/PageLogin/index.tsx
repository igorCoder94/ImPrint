import React from 'react';
// import ImgLogin from '../../assets/images/imprint_login.png';
// import ImgRay from '../../assets/images/login/ray.jpg';
import IconLogin from '../../assets/icons/login/icon.svg';
import IconRay from '../../assets/images/login/ray.svg';

export const PageLogin: React.FC = () => {
  return (
    <div className="relative flex flex-col h-full justify-start bg-login-page overflow-y-auto overflow-x-hidden scrollbar">
      <div
        style={{
          background:
            'linear-gradient(to right, rgba(17,17,17,1), rgba(17,17,17,1), rgba(17,17,17,0.6), rgba(17,17,17,0.4), rgba(17,17,17,0))',
        }}
        className="absolute top-[60px] left-0 h-[20px] w-[200px] sm:hidden lg:flex"
      ></div>
      <div className="justify-center mt-5 md:hidden lg:flex">
        <img className="ml-[-578px]" src={IconRay} alt="login" />
      </div>
      <div className="justify-center mt-[20px] sm:flex lg:hidden">
        <img src={IconLogin} alt="login" />
      </div>
      <div className="text-[64px] leading-[80px] mb-[60px] sm:text-center lg:text-left">
        imprint - это
        <br />
        образовательная
        <br />
        платформа
      </div>
      <div className="flex justify-center w-full mb-4">
        <form action="">
          <div className="flex flex-col mb-14">
            <label className="mb-2" htmlFor="">
              логин
            </label>
            <input className="h-[60px] p-4 text-[black] font-bold rounded-[37px]" type="text" />
          </div>
          <div className="flex flex-col mb-20 min-w-[450px]">
            <label className="mb-2" htmlFor="">
              пароль
            </label>
            <input className="h-[60px] p-4 text-[black] font-bold rounded-[37px] " type="text" />
          </div>
          <div className="flex justify-between">
            <button
              className="h-[60px] w-full rounded-[37px] px-[40px] mr-[20px] font-bold bg-[#4F60FF] border-2 border-[#4F60FF] hover:bg-inherit  duration-300 ease-in-out"
              onClick={(event) => {
                console.log('1');
                event.preventDefault();
              }}
            >
              войти
            </button>
            <button
              className="h-[60px] w-full text-blue-default font-bold px-[40px] rounded-[37px] border-2 border-blue-default hover:bg-blue-default hover:text-black  duration-300 ease-in-out"
              onClick={(event) => {
                console.log('2');
                event.preventDefault();
              }}
            >
              регистрация
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
